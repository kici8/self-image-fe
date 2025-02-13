import IconClusterA from "@/components/icons/IconClusterA";
import IconClusterASolid from "@/components/icons/IconClusterASolid";
import IconClusterB from "@/components/icons/IconClusterB";
import IconClusterBSolid from "@/components/icons/IconClusterBSolid";
import IconClusterC from "@/components/icons/IconClusterC";
import IconClusterCSolid from "@/components/icons/IconClusterCSolid";
import IconClusterD from "@/components/icons/IconClusterD";
import IconClusterDSolid from "@/components/icons/IconClusterDSolid";
import IconClusterE from "@/components/icons/IconClusterE";
import IconClusterESolid from "@/components/icons/IconClusterESolid";
import IconClusterF from "@/components/icons/IconClusterF";
import IconClusterFSolid from "@/components/icons/IconClusterFSolid";
import {
  CircleOffIcon,
  EyeClosedIcon,
  EyeIcon,
  Layers2Icon,
  PaletteIcon,
  VenetianMaskIcon,
} from "lucide-react";

export const staticClusters = [
  {
    id: "B",
    name: "Nascondersi",
    hiddenIcon: <IconClusterB />,
    icon: <IconClusterBSolid />,
    descriptiveIcon: <EyeClosedIcon />,
  },
  {
    id: "A",
    name: "Disegnarsi",
    hiddenIcon: <IconClusterA />,
    icon: <IconClusterASolid />,
    descriptiveIcon: <PaletteIcon />,
  },
  {
    id: "C",
    name: "Presentarsi",
    hiddenIcon: <IconClusterC />,
    icon: <IconClusterCSolid />,
    descriptiveIcon: <EyeIcon />,
  },
  {
    id: "D",
    name: "Mascherarsi",
    hiddenIcon: <IconClusterD />,
    icon: <IconClusterDSolid />,
    descriptiveIcon: <VenetianMaskIcon />,
  },
  {
    id: "E",
    name: "(S)comporsi",
    hiddenIcon: <IconClusterE />,
    icon: <IconClusterESolid />,
    descriptiveIcon: <Layers2Icon />,
  },
  {
    id: "F",
    name: "Sottrarsi",
    hiddenIcon: <IconClusterF />,
    icon: <IconClusterFSolid />,
    descriptiveIcon: <CircleOffIcon />,
  },
];
