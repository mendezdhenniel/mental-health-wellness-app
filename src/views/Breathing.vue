<template>
  <div class="breathing-container">
    <div class="content-wrapper">
      <header class="breathing-header">
        <h1>Pause & Breathe</h1>
        <p>Inhale peace, exhale stress.</p>
      </header>

      <div class="animation-space">
        <div class="breathing-circle"></div>
        <p class="instruction-text">Follow the circle...</p>
      </div>

      <div class="exercise-list">
        <h3>Techniques to Try</h3>
        <div class="tech-card">
          <span>🌿</span>
          <div>
            <h4>4-7-8 Technique</h4>
            <p>Great for falling asleep and reducing anxiety.</p>
          </div>
        </div>
        <div class="tech-card">
          <span>🌊</span>
          <div>
            <h4>Box Breathing</h4>
            <p>Used by athletes to stay calm under pressure.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.breathing-container {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  background-color: #f0f7f4; /* Very light soft green */
}

.content-wrapper {
  max-width: 500px;
  width: 100%;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #2d6a4f;
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.breathing-header p {
  color: #52796f;
  margin-bottom: 40px;
}

/* Simulated Breathing Circle */
.animation-space {
  margin: 40px 0;
}

.breathing-circle {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #b7e4c7, #74c69d);
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 0 30px rgba(116, 198, 157, 0.4);
  /* Basic breathing effect animation */
  animation: breathe 8s infinite ease-in-out;
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.4); opacity: 1; }
}

.instruction-text {
  margin-top: 20px;
  font-weight: 500;
  color: #40916c;
}

.exercise-list {
  text-align: left;
  margin-top: 40px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.02);
}

.tech-card {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.tech-card span {
  font-size: 1.5rem;
}

.tech-card h4 {
  margin: 0;
  color: #1b4332;
}

.tech-card p {
  margin: 0;
  font-size: 0.9rem;
  color: #6c757d;
}
</style>