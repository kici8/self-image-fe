type Cluster = {
  cluster_id: string;
  score: number;
};

type Session = {
  session_id: string;
  unlocked_images: string[];
  unlocked_filters: string[];
  scores: Cluster[];
};

type RoomResults = {
  sessions: Session[];
};

type Interaction = {
  cluster_id: string;
  image_id: string;
  fragment_id: string;
  liked: boolean;
};

type Participant = {
  nickname: string;
  sessions: {
    session_id: string;
    interactions: Interaction[];
    clusters: Cluster[];
    unlocked_images: string[];
    unlocked_filters: string[];
    selfie_id: string;
  }[];
};

type Result = {
  roomResults: RoomResults;
  participants: Participant[];
};

export const mockResultsData: Result = {
  roomResults: {
    sessions: [
      {
        session_id: "session1",
        unlocked_images: ["d.1", "d.4", "d.5", "f.3", "f.4", "f.5"],
        unlocked_filters: ["filter1", "filter2"],
        scores: [
          { cluster_id: "A", score: 0.1 },
          { cluster_id: "B", score: 0.3 },
          { cluster_id: "C", score: 0.4 },
          { cluster_id: "D", score: 0.2 },
          { cluster_id: "E", score: 0.1 },
          { cluster_id: "F", score: 0.0 },
        ],
      },
      {
        session_id: "session2",
        unlocked_images: ["a.4", "a.4", "c.5", "e.3", "f.4", "f.5"],
        unlocked_filters: ["filter3"],
        scores: [
          { cluster_id: "A", score: 0.1 },
          { cluster_id: "B", score: 0.3 },
          { cluster_id: "C", score: 0.4 },
          { cluster_id: "D", score: 0.2 },
          { cluster_id: "E", score: 0.1 },
          { cluster_id: "F", score: 0.0 },
        ],
      },
    ],
  },
  participants: [
    {
      nickname: "Participant1",
      sessions: [
        {
          session_id: "session1",
          interactions: [
            {
              cluster_id: "A",
              image_id: "a.1",
              fragment_id: "a.1.1",
              liked: true,
            },
            {
              cluster_id: "B",
              image_id: "b.2",
              fragment_id: "b.2.1",
              liked: false,
            },
            {
              cluster_id: "C",
              image_id: "c.3",
              fragment_id: "c.3.1",
              liked: true,
            },
            {
              cluster_id: "D",
              image_id: "d.4",
              fragment_id: "d.4.1",
              liked: false,
            },
            {
              cluster_id: "E",
              image_id: "e.5",
              fragment_id: "e.5.1",
              liked: true,
            },
            {
              cluster_id: "F",
              image_id: "f.6",
              fragment_id: "f.6.1",
              liked: false,
            },
          ],
          clusters: [
            { cluster_id: "A", score: 0.1 },
            { cluster_id: "B", score: 0.5 },
            { cluster_id: "C", score: 0.1 },
            { cluster_id: "D", score: 0.2 },
            { cluster_id: "E", score: 0.1 },
            { cluster_id: "F", score: 0.0 },
          ],
          unlocked_images: ["d.2", "f.4"],
          unlocked_filters: ["filter1"],
          selfie_id: "1c9e536b-0876-463b-b70d-fefd55271a17",
        },
        {
          session_id: "session1",
          interactions: [
            {
              cluster_id: "A",
              image_id: "a.1",
              fragment_id: "a.1.1",
              liked: true,
            },
            {
              cluster_id: "B",
              image_id: "b.2",
              fragment_id: "b.2.1",
              liked: false,
            },
            {
              cluster_id: "C",
              image_id: "c.3",
              fragment_id: "c.3.1",
              liked: true,
            },
            {
              cluster_id: "D",
              image_id: "d.4",
              fragment_id: "d.4.1",
              liked: false,
            },
            {
              cluster_id: "E",
              image_id: "e.5",
              fragment_id: "e.5.1",
              liked: true,
            },
            {
              cluster_id: "F",
              image_id: "f.6",
              fragment_id: "f.6.1",
              liked: false,
            },
          ],
          clusters: [
            { cluster_id: "A", score: 0.1 },
            { cluster_id: "B", score: 0.5 },
            { cluster_id: "C", score: 0.1 },
            { cluster_id: "D", score: 0.2 },
            { cluster_id: "E", score: 0.1 },
            { cluster_id: "F", score: 0.0 },
          ],
          unlocked_images: ["c.5", ".a.4"],
          unlocked_filters: ["filter1"],
          selfie_id: "1c9e536b-0876-463b-b70d-fefd55271a17",
        },
      ],
    },
    {
      nickname: "Participant2",
      sessions: [
        {
          session_id: "session1",
          interactions: [
            {
              cluster_id: "A",
              image_id: "a.1",
              fragment_id: "a.1.1",
              liked: true,
            },
            {
              cluster_id: "B",
              image_id: "b.2",
              fragment_id: "b.2.1",
              liked: false,
            },
            {
              cluster_id: "C",
              image_id: "c.3",
              fragment_id: "c.3.1",
              liked: true,
            },
            {
              cluster_id: "D",
              image_id: "d.4",
              fragment_id: "d.4.1",
              liked: false,
            },
            {
              cluster_id: "E",
              image_id: "e.5",
              fragment_id: "e.5.1",
              liked: true,
            },
            {
              cluster_id: "F",
              image_id: "f.6",
              fragment_id: "f.6.1",
              liked: false,
            },
          ],
          clusters: [
            { cluster_id: "A", score: 0.1 },
            { cluster_id: "B", score: 0.5 },
            { cluster_id: "C", score: 0.1 },
            { cluster_id: "D", score: 0.2 },
            { cluster_id: "E", score: 0.1 },
            { cluster_id: "F", score: 0.0 },
          ],
          unlocked_images: ["e.2", "f.1"],
          unlocked_filters: ["filter1"],
          selfie_id: "1c9e536b-0876-463b-b70d-fefd55271a17",
        },
        {
          session_id: "session1",
          interactions: [
            {
              cluster_id: "A",
              image_id: "a.1",
              fragment_id: "a.1.1",
              liked: true,
            },
            {
              cluster_id: "B",
              image_id: "b.2",
              fragment_id: "b.2.1",
              liked: false,
            },
            {
              cluster_id: "C",
              image_id: "c.3",
              fragment_id: "c.3.1",
              liked: true,
            },
            {
              cluster_id: "D",
              image_id: "d.4",
              fragment_id: "d.4.1",
              liked: false,
            },
            {
              cluster_id: "E",
              image_id: "e.5",
              fragment_id: "e.5.1",
              liked: true,
            },
            {
              cluster_id: "F",
              image_id: "f.6",
              fragment_id: "f.6.1",
              liked: false,
            },
          ],
          clusters: [
            { cluster_id: "A", score: 0.1 },
            { cluster_id: "B", score: 0.5 },
            { cluster_id: "C", score: 0.1 },
            { cluster_id: "D", score: 0.2 },
            { cluster_id: "E", score: 0.1 },
            { cluster_id: "F", score: 0.0 },
          ],
          unlocked_images: ["b.2", "b.5"],
          unlocked_filters: ["filter1"],
          selfie_id: "1c9e536b-0876-463b-b70d-fefd55271a17",
        },
      ],
    },
  ],
};
