"use client";

import {
  ClusterFragment,
  staticClusterFragments,
} from "@/lib/staticElements/clusterFragments";
import {
  ClusterImage,
  staticClusterImages,
} from "@/lib/staticElements/clusterImages";
import { staticClusters } from "@/lib/staticElements/clusters";
import { pickRandom } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";

// Define data types for clusters, images, and fragments;
type SeenClusterFragments = ClusterFragment & {
  liked: boolean;
};

export type SpawnedFragment = ClusterFragment & {
  roundNumber: number;
};

type ClusterValues = Record<string, number>;

// Define the shape of the game context state and methods
type GameContextType = {
  clusterValues: ClusterValues;
  activeSpawnedFragment: SpawnedFragment;
  fragmentsSpawned: SpawnedFragment[];
  roundNumber: number;
  maxNumberOfRounds: number;
  applySwipeEffect: (fragment: ClusterFragment, liked: boolean) => void;
  seenFragments: SeenClusterFragments[];
  unlockedImages: Set<string>;
  unlockedFilters: Set<string>;
  isGameOver: boolean;
};

// Create the context with an undefined initial state
const GameContext = createContext<GameContextType | undefined>(undefined);

// Provider component to wrap parts of the app needing game state
export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Static data is imported from static elements
  const clusters = staticClusters;
  const clusterImages = staticClusterImages;
  const clusterFragments = staticClusterFragments;
  const initialClusterValues: ClusterValues = Object.fromEntries(
    clusters.map((cluster) => [cluster.id, 0.4]),
  );
  const maxNumberOfRounds = 24; // Maximum number of images allowed
  const maxAcceptedFragments = 3; // Number of liked fragments required to unlock an image
  const firstSpawnedFragment: SpawnedFragment = {
    ...pickRandom(clusterFragments),
    roundNumber: 1,
  };

  // Game states
  const [roundNumber, setRoundNumber] = useState(1);
  const [clusterValues, setClusterValues] =
    useState<ClusterValues>(initialClusterValues);
  const [fragmentsSpawned, setFragmentsSpawned] = useState<SpawnedFragment[]>([
    firstSpawnedFragment,
  ]);
  const [activeSpawnedFragment, setActiveSpawnedFragment] =
    useState<SpawnedFragment>(fragmentsSpawned[0]);
  const [seenFragments, setSeenFragments] = useState<SeenClusterFragments[]>(
    [],
  );
  const [unlockedImages, setUnlockedImages] = useState<Set<string>>(new Set());
  const [unlockedFilters, setUnlockedFilters] = useState<Set<string>>(
    new Set(),
  );
  const [isGameOver, setIsGameOver] = useState(false);

  // Roulette Wheel Selection: Choose a cluster based on weighted values
  function rouletteWheelClusterSelection(values: ClusterValues): string {
    const entries = Object.entries(values);
    const randomClusterIDForFallback = pickRandom(clusters).id;

    // If no values are available, return a random cluster ID
    if (entries.length === 0) {
      return randomClusterIDForFallback;
    }

    // If all values are zero, return a random cluster ID
    const total = entries.reduce((sum, [, value]) => sum + value, 0);
    if (total === 0) {
      return randomClusterIDForFallback;
    }

    // Otherwise, normalize the values
    const normalizedValues = Object.fromEntries(
      entries.map(([key, value]) => [key, value / total]),
    ) as ClusterValues;

    // Generate a random value and select a cluster based on the normalized values
    const randomValue = Math.random();
    let sum = 0;
    for (const [clusterId, value] of Object.entries(normalizedValues)) {
      sum += value;
      if (randomValue <= sum) {
        return clusterId;
      }
    }
    return randomClusterIDForFallback;
  }

  // Spawn a new fragment ensuring it hasn't been seen before
  function spawnFragment() {
    // If maximum images reached, don't spawn more fragments

    // Select a cluster based on current weighted values using roulette selection
    const selectedClusterId = rouletteWheelClusterSelection(clusterValues);
    // Get images available in this cluster
    const imagesForSelectedCluster = clusterImages.filter(
      (image) => image.cluster_id === selectedClusterId,
    );

    // If there are no images in the selected cluster, fallback to all available images
    let selectedImage: ClusterImage;
    if (imagesForSelectedCluster.length === 0) {
      selectedImage = pickRandom(clusterImages);
    } else {
      selectedImage = pickRandom(imagesForSelectedCluster);
    }

    // FIXME: check if this filter is working
    // filter fragments to only include fragments that haven't been seen yet
    const availableFragments = clusterFragments.filter(
      (frag) => !seenFragments.some((seenFrag) => seenFrag.id === frag.id),
    );

    // Filter fragments to only include ones from the selected image
    const availableFragmentsForSelectedImage = availableFragments.filter(
      (fragment) => fragment.image_id == selectedImage.id,
    );

    let selectedFragment: ClusterFragment;

    // First try picking a fragment from the selected image
    // TODO: check this
    if (availableFragmentsForSelectedImage.length > 0) {
      selectedFragment = pickRandom(availableFragmentsForSelectedImage);
    } else {
      // Otherwise, filter fragments for the selected cluster
      const availableFragmentsForSelectedCluster = availableFragments.filter(
        (frag) => frag.cluster_id === selectedClusterId,
      );

      // If there are fragments for the cluster, pick one, otherwise pick from all available fragments
      selectedFragment =
        availableFragmentsForSelectedCluster.length > 0
          ? pickRandom(availableFragmentsForSelectedCluster)
          : pickRandom(availableFragments);
    }

    const newFragment: SpawnedFragment = {
      ...selectedFragment,
      roundNumber: roundNumber + 1,
    };

    setFragmentsSpawned((prev) => [...prev, newFragment]);
    setActiveSpawnedFragment(newFragment);
  }

  // Apply swipe effect: update cluster values and unlock conditions based on player's swipe action
  function applySwipeEffect(fragment: ClusterFragment, liked: boolean) {
    // Find the image associated with the fragment
    const swipedImage = clusterImages.find(
      (img) => img.id === fragment.image_id,
    );

    if (!swipedImage) {
      // FIXME: This should never happen but handle it just in case
      console.error(`Image not found for fragment: ${fragment.id}`);
      // TODO: this can't be just a return, it should be a throw and the game must go on
      return;
    }

    // Update cluster values for the image based on swipe result
    const updatedValues = { ...clusterValues };

    swipedImage.clusterValues.forEach(({ clusterId, value }) => {
      // Calculate new value based on swipe (liked adds the value, rejected subtracts it)
      // FIXME: discuss this with the team
      // The range of values is between 0 and 1
      // The image points are divided by 80 so + 12 is equivalent to +0.15, -4 is equivalent to -0.05, -8 is equivalent to -0.1
      // So in game of 20 rounds, the maximum value that can be added is 3 and the minimum is -2
      const convertedValue = (value / 40) * (liked ? 1 : -1);
      const newValue = updatedValues[clusterId] + convertedValue;
      const clampedValue = Math.min(Math.max(newValue, 0), 1);
      // Clamp newValue between 0 and 1
      updatedValues[clusterId] = clampedValue;
    });

    const newSeenFragments: SeenClusterFragments[] = [
      ...seenFragments,
      { ...fragment, liked: liked },
    ];
    console.log(`Seen Fragments:`, newSeenFragments);

    if (liked) {
      console.log(`Accepted Fragment: ${fragment.url}`);

      const likedFragmentsForImage = newSeenFragments.filter(
        (frag) => frag.image_id === fragment.image_id && frag.liked,
      );

      if (likedFragmentsForImage.length >= maxAcceptedFragments) {
        // TODO: show in the UI that the image is unlocked
        console.log(`Unlocked Image 🖼️🖼️🖼️: ${swipedImage.id}`);
        setUnlockedImages((prev) => new Set([...prev, swipedImage.id]));
        if (swipedImage.filter_id && swipedImage.filter_id !== undefined) {
          // TODO: show in the UI that the filter is unlocked
          console.log(`Unlocked Filter 🎭🎭🎭: ${swipedImage.filter_id}`);
          setUnlockedFilters(
            (prev) => new Set([...prev, swipedImage.filter_id!]),
          );
        }
      }
    }

    // Update game state
    setClusterValues(updatedValues);
    setSeenFragments((prev) => [...prev, { ...fragment, liked: liked }]);
    setRoundNumber((prev) => prev + 1);
    // If the maximum number of images has been reached, end the game
    if (roundNumber >= maxNumberOfRounds) {
      // TODO: show in the UI that the game is over and move to the next screen
      // TODO: save the game report to the server
      console.log("Game Over 🎉🎉🎉");
      setIsGameOver(true);
    } else {
      spawnFragment();
    }
  }

  // Provide all game state and functions to consumer components using the GameContext
  return (
    <GameContext.Provider
      value={{
        clusterValues,
        seenFragments,
        activeSpawnedFragment,
        fragmentsSpawned,
        roundNumber,
        maxNumberOfRounds,
        applySwipeEffect,
        unlockedImages,
        unlockedFilters,
        isGameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to access game context in child components
export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
