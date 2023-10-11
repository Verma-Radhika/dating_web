import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Analytics from "../pages/Analytics";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";
import Comment from "../pages/Comment";
import { MeetNewFnd } from "../pages/MeetNewFnd/MeetNewFnd";
import { Suggestions } from "../pages/Suggetions.js/Suggestions";
import { SuggestionCards } from "../components/Swiper/SuggestionCards";
import { Profile } from "../pages/Profile/Profile";
import {FriendsList} from "../pages/Profile/FriendsList";
import { Messages } from "../pages/Meassages/Messages";
import { Visitor } from "../pages/Visitor/Visitor";
import { FrndRequest } from "../pages/FriendsRequest/FrndRequest";
import { Notifications } from "../pages/Notification/Notifications";
import { Favorites } from "../pages/Favoriute/Favorites";
import { PopularHome } from "../pages/Popular/PopularHome";
export const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MeetNewFnd />} />
      {/* ............................My Pages............................ */}
      <Route path="/meet/new/friends" element={<MeetNewFnd />} />
      <Route path="/suggestions" element={<Suggestions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/friends/request" element={<FrndRequest />} />
      <Route path="/visitors" element={<Visitor />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/popular" element={<PopularHome />} />

      {/* .......................................................... */}

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/product" element={<Product />} />
      <Route path="/productList" element={<ProductList />} />
    </Routes>
  );
};
