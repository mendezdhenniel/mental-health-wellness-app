<template>
  <div class="ai-container">
    <header class="header-card">
      <div class="ai-avatar pulse">🤖</div>
      <h1>AI Support Companion</h1>
      <p>A safe space to talk, 24/7. Your conversations are private and supportive.</p>
    </header>

    <div class="chat-window">
      <div class="message bot fade-in">
        <div class="msg-content">
          Hello! I'm your wellness assistant. How are you feeling today?
        </div>
        <span class="timestamp">Just now</span>
      </div>

      <div class="message system fade-in-delayed">
        <div class="typing-indicator">
          <span></span><span></span><span></span>
        </div>
        <p>AI is thinking... (Integration coming in next lab)</p>
      </div>
    </div>

    <div class="action-box">
      <div class="input-mockup">
        <input type="text" placeholder="Type your message..." disabled />
        <button class="send-btn">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </button>
      </div>
      <p class="disclaimer">
        ⚠️ <strong>Note:</strong> This AI is for support, not a replacement for professional medical advice.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Container Setup */
.ai-container {
  max-width: 650px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Header Styling */
.header-card {
  text-align: center;
  background: white;
  padding: 30px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  margin-bottom: 30px;
  border: 1px solid #f0f4f8;
}

.ai-avatar {
  font-size: 3.5rem;
  margin-bottom: 15px;
  display: inline-block;
}

.pulse {
  animation: shadow-pulse 2s infinite;
  border-radius: 50%;
}

@keyframes shadow-pulse {
  0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(74, 144, 226, 0.4)); }
  70% { transform: scale(1.05); filter: drop-shadow(0 0 15px rgba(74, 144, 226, 0)); }
  100% { transform: scale(1); }
}

h1 {
  color: #1a2b4b;
  font-size: 1.8rem;
  margin-bottom: 8px;
}

/* Chat Window Area */
.chat-window {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f8fafc;
  padding: 25px;
  border-radius: 24px;
  min-height: 300px;
  border: 1px solid #edf2f7;
}

.message {
  max-width: 85%;
  position: relative;
}

.bot .msg-content {
  background: white;
  color: #2d3748;
  padding: 14px 20px;
  border-radius: 18px 18px 18px 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  line-height: 1.5;
  border: 1px solid #e2e8f0;
}

.timestamp {
  font-size: 0.7rem;
  color: #a0aec0;
  margin-top: 5px;
  display: block;
}

/* Typing Indicator Animation */
.system {
  align-self: center;
  text-align: center;
  color: #718096;
  font-style: italic;
  font-size: 0.9rem;
}

.typing-indicator span {
  height: 8px;
  width: 8px;
  background: #cbd5e0;
  display: inline-block;
  border-radius: 50%;
  margin: 0 2px;
  animation: bounce 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
}

/* Input Area Mockup */
.input-mockup {
  display: flex;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 100px;
  padding: 8px 8px 8px 20px;
  margin-top: 25px;
  transition: border-color 0.3s;
}

input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
}

.send-btn {
  background: #4a90e2;
  color: white;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
  opacity: 0.6;
}

.disclaimer {
  font-size: 0.8rem;
  color: #a0aec0;
  margin-top: 15px;
  line-height: 1.4;
}

/* Animations */
.fade-in { animation: fadeIn 0.5s ease-out; }
.fade-in-delayed { animation: fadeIn 0.5s ease-out 1s both; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>