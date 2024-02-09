<template>
  <AppLayout>
    <div class="px-4 py-10 mx-auto max-w-7xl md:px-0">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-6">
        <div class="col-span-1 space-y-4 md:col-span-4">
          <WritePost />
          <FeedTabs />
          <div class="space-y-6">
            <Post
              v-for="post in posts"
              :key="post.id"
              :user="post.user"
              :location="post.location"
              :content="post.content"
              :likes="post.likes"
              :comments="post.comments"
              :img="post.img"
            />
          </div>
        </div>
        <div class="col-span-1 md:col-span-2">
          <RecommendedModels />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layouts/AppLayout.vue";
const posts = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Sofia Guirno",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      date: "20 hours ago",
    },
    content: `It's never too late to start something new. Start easy. Consuming the
        minds and souls of men. Whether you’re a complete beginner or you want
        to step up your routine, get the full studio experience at home with
        thousands of classes for body, mind, and spirit.`,
    img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    likes: 10,
    comments: 5,
    location: "Tokyo, Japan",
  },
  {
    id: 1,
    user: {
      id: 1,
      name: "Sofia Guirno",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      date: "20 hours ago",
    },
    content: `It's never too late to start something new. Start easy. Consuming the
        minds and souls of men. Whether you’re a complete beginner or you want
        to step up your routine, get the full studio experience at home with
        thousands of classes for body, mind, and spirit.`,
    img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    likes: 10,
    comments: 5,
    location: "Tokyo, Japan",
  },
];
</script>
