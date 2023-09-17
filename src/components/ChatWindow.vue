<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messagesRef">
      <div v-for="doc in formatedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }} ago</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
import { computed, ref, onUpdated } from 'vue';

export default {
  setup() {
    const { error, documents } = getCollection('messages');
    const formatedDocuments = computed(() => {
      if (!documents.value) {
        return [];
      }

      return documents.value.map((doc) => {
        const time = formatDistanceToNow(doc.createdAt.toDate());
        return {
          ...doc,
          createdAt: time
        };
      });
    });

    const messagesRef = ref(null);
    onUpdated(() => {
      messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
    });

    return { error, documents, formatedDocuments, messagesRef };
  }
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}

.single {
  margin: 18px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  margin-right: 6px;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
