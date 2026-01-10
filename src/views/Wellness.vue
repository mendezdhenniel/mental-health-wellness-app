<template>
  <div class="wellness-container">
    <header class="wellness-header">
      <h1>Daily Wellness</h1>
      <p>Small habits, big changes. Here are your tips for today.</p>
    </header>

    <div class="tips-grid">
      <div class="tip-card highlight">
        <div class="tip-tag">Tip of the Day</div>
        <h3>The 20-20-20 Rule</h3>
        <p>Every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye strain and mental fatigue.</p>
      </div>

      <div class="tip-card">
        <span class="tip-icon">☀️</span>
        <h4>Morning Sunlight</h4>
        <p>Try to get 10 minutes of sun early in the day to regulate your sleep cycle.</p>
      </div>

      <div class="tip-card">
        <span class="tip-icon">🧘</span>
        <h4>Digital Detox</h4>
        <p>Turn off screens 30 minutes before bed to allow your mind to quiet down.</p>
      </div>

      <div class="tip-card">
        <span class="tip-icon">🍎</span>
        <h4>Hydration Check</h4>
        <p>Have you had water in the last hour? Staying hydrated improves focus.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wellness-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', system-ui, sans-serif;
  color: #333;
}

.wellness-header {
  text-align: center;
  margin-bottom: 50px;
}

h1 {
  color: #6d597a; /* Soft purple/mauve */
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.wellness-header p {
  color: #b5838d;
  font-size: 1.1rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.tip-card {
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.tip-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
}

.highlight {
  grid-column: 1 / -1; /* Makes the main tip full width */
  background: #fffafa;
  border: 1px solid #ffb4a2;
}

.tip-tag {
  background: #ffb4a2;
  color: white;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 15px;
}

.tip-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 15px;
}

h3 {
  color: #6d597a;
  font-size: 1.5rem;
  margin-top: 0;
}

h4 {
  color: #6d597a;
  margin: 0 0 10px 0;
}

p {
  line-height: 1.6;
  color: #555;
}

@media (max-width: 600px) {
  .highlight {
    grid-column: auto;
  }
}
</style>