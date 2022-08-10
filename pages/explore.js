<<<<<<< HEAD
import SideNavLayout from "../components/SideNavLayout";
import FilterSearch from "../components/explore/FilterSearch";
import Tabs from "../components/explore/Tabs";

import { fetchExploreStart } from "../store/slices/postSlice";
=======
>>>>>>> 34ef5ee98bb80b35bdff506c5407f594fca1b4d6
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterSearch from "../components/explore/FilterSearch";
import Tabs from "../components/explore/Tabs";
import SideNavLayout from "../components/SideNavLayout";
import { fetchExploreStart } from "../store/slices/postSlice";

import { getSelectorsByUserAgent ,isMobileOnly, isMobile} from "react-device-detect";
import {
  fetchGroupsStart,
  joinGroupStart,
} from "../store/slices/groupsSlice";
import { 
  fetchChannelsStart,
} from "../store/slices/channelsSlice";
import { getCookies } from "cookies-next";


import { END } from "redux-saga";
import { wrapper } from "../store";



const Explore = () => {
  const dispatch = useDispatch();
  const explorePosts = useSelector((state) => state.post.explorePosts);

<<<<<<< HEAD
  useEffect(() => {
    dispatch(fetchExploreStart());
  }, []);
=======
  // useEffect(() => {
  //   dispatch(fetchExploreStart());
   
  // }, []);
>>>>>>> 34ef5ee98bb80b35bdff506c5407f594fca1b4d6

  return (
    <SideNavLayout>
      <div className="max-w-5xl px-1 mx-auto">
        <FilterSearch />

        <Tabs />
      </div>
    </SideNavLayout>
  );
};

export default Explore;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {



   
      const cookies = getCookies({ req, res });

      store.dispatch(
        fetchExploreStart({
          accessToken: cookies.accessToken,
        
        })
      );
      store.dispatch(
        fetchGroupsStart({
          accessToken: cookies.accessToken,
        
        })
      );
      store.dispatch(
        fetchChannelsStart({
          accessToken: cookies.accessToken,
        
        })
      );

    

      store.dispatch(END);
      await store.sagaTask.toPromise();

      return {
        props: {},
      };
    }
);
