import { useEffect, useState } from "react";
import axios from "axios";
import { SearchBar } from "../components/SearchBar";
import { UserCard } from "../components/UserCard";
export interface userData {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  public_repos: string;
  followers: number;
  following: number;
}
const BASE_URL = "https://api.github.com";

export const Home = () => {
  const [user, setUser] = useState<userData | null>(null);
  const [userName, setUserName] = useState<string>("rimanshupatel");

  const handleSubmit = async () => {
    const { data: userdata } = await axios.get<userData>(
      `${BASE_URL}/users/${userName}`
    );
    const {
      id,
      login,
      avatar_url,
      html_url,
      name,
      company,
      blog,
      location,
      email,
      bio,
      twitter_username,
      public_repos,
      followers,
      following,
    } = userdata;
    setUser({
      id,
      login,
      avatar_url,
      html_url,
      name,
      company,
      blog,
      location,
      email,
      bio,
      twitter_username,
      public_repos,
      followers,
      following,
    });
    console.log(user);
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <SearchBar
        userName={userName}
        setUserName={setUserName}
        handleSubmit={handleSubmit}
      />
      <UserCard user={user} />
    </>
  );
};
export default Home;
