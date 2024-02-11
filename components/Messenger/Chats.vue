<template>
  <div>
    <div class="space-y-4">
      <Message
        v-for="message in messages"
        :key="message.userName"
        :userAvatar="message.userAvatar"
        :userName="message.userName"
        :message="message.message"
        :unreadMessages="message.unreadMessages"
        :time="message.time"
      />
    </div>
  </div>
</template>
<script setup>
import Message from "./Message.vue";
const messages = ref([
  {
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    userName: "Tobias Ricky",
    message: "I’m on coffee shop now 😂",
    unreadMessages: 2,
    time: "15 min",
  },
  {
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    userName: "anny_wilson",
    message: "See you in the meeting!",
    unreadMessages: 0,
    // time: "15 min",
  },
  {
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    userName: "Tobias Ricky",
    message: "I’m on coffee shop now 😂",
    unreadMessages: 2,
    time: "15 min",
  },
  {
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    userName: "Tobias Ricky",
    message: "I’m on coffee shop now 😂",
    unreadMessages: 2,
    time: "15 min",
  },
  {
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    userName: "Tobias Ricky",
    message: "I’m on coffee shop now 😂",
    unreadMessages: 2,
    time: "15 min",
  },
  {
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    userName: "Tobias Ricky",
    message: "I’m on coffee shop now 😂",
    unreadMessages: 2,
    time: "15 min",
  },
]);
</script>
