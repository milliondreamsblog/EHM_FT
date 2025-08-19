import React from "react";
import CreateAdmin from "../sidebarOptions/CreateAdmin";
import Subscribers from "../sidebarOptions/Subscribers";
import BlogsManage from "../sidebarOptions/blogsManage";
import ArticleManage from "../sidebarOptions/ArticleManage";

export default function MainContent({ activeTab }) {
  return (
    <main className="flex-1 p-8 bg-white">
      {!activeTab && (
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#35582a]">
            Welcome to Dashboard
          </h2>
          <p className="text-gray-700">Select an option from the sidebar.</p>
        </div>
      )}

      {activeTab === "createAdmin" && <CreateAdmin />}
      {activeTab === "subscribers" && <Subscribers />}
      {activeTab === "blogManage" && <BlogsManage />}
      {activeTab === "articles" && <ArticleManage />}
    </main>
  );
}
