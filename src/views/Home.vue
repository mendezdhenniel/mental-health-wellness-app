<template>
  <div class="home-container">
    <header class="hero-section">
      <div class="icon-circle">🧠</div>
      <h1>Welcome to Your Wellness Space</h1>
      <p>Taking a small step today is a big win for your mental health.</p>
    </header>

    <div class="card-grid">
      <div class="info-card">
        <h3>Daily Focus</h3>
        <p>Stay mindful and present in the moment.</p>
      </div>
      <div class="info-card">
        <h3>Quick Tip</h3>
        <p>Drink a glass of water and take three deep breaths.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  color: #2c3e50;
}

.hero-section {
  background: linear-gradient(135deg, #e0f2f1 0%, #ffffff 100%);
  padding: 60px 20px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.icon-circle {
  font-size: 3rem;
  margin-bottom: 20px;
  display: inline-block;
  background: white;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
  color: #00796b;
  margin-bottom: 10px;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.info-card {
  background: #f1f8f7;
  padding: 20px;
  border-radius: 15px;
  border-left: 5px solid #009688;
  transition: transform 0.2s;
}

.info-card:hover {
  transform: translateY(-5px);
}

h3 {
  margin-top: 0;
  color: #004d40;
}
</style>