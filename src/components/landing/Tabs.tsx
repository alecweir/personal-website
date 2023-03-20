import { AnimatePresence, motion } from "framer-motion";

import IPhotography from "@/types/photography";
import IProject from "@/types/project";

import CollectionList from "../photography/CollectionList";
import RecentProjectsList from "./RecentProjectsList";
import { TAB_TYPES } from "@/constants/tab.constants";

interface Props {
  active: string;
  photos: IPhotography["data"][];
  projects: IProject["data"][];
}

const Tabs = ({ active, photos, projects }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active ? active : "empty"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {GetTab(active, photos, projects)}
      </motion.div>
    </AnimatePresence>
  );
};

const GetTab = (
  active: Props["active"],
  photos: Props["photos"],
  projects: Props["projects"]
) => {
  switch (active) {
    case TAB_TYPES["PHOTOS"]:
      return <CollectionList photos={photos} />;
    case TAB_TYPES["PROJECTS"]:
      return <RecentProjectsList projects={projects} />;
  }
};

export default Tabs;
