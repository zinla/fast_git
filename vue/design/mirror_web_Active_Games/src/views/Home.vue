<template>
  <div class="home">
    <main>
      <section class="glass">
        <div class="dashboard">
          <div class="user">
            <img src="../assets/images/avatar.png" alt="" />
            <h3>Simo Edwin</h3>
            <p>Pro Member</p>
          </div>
          <div class="links">
            <div class="link">
              <img src="../assets/images/twitch.png" alt="" />
              <h2>Streams</h2>
            </div>
            <div class="link">
              <img src="../assets/images/steam.png" alt="" />
              <h2>Games</h2>
            </div>
            <div class="link">
              <img src="../assets/images/upcoming.png" alt="" />
              <h2>New</h2>
            </div>
            <div class="link">
              <img src="../assets/images/library.png" alt="" />
              <h2>Library</h2>
            </div>
          </div>
          <div class="pro">
            <h2>Join pro for free games.</h2>
            <img src="../assets/images/controller.png" alt="" />
          </div>
        </div>
        <div class="games">
          <div class="status">
            <h1>Active Games</h1>
            <input type="text" />
          </div>
          <div class="cards">
            <div class="card">
              <img src="../assets/images/assassins.png" alt="" />
              <div class="card-info">
                <h2>Assassins Creed Valhalla</h2>
                <p>PS5 Version</p>
                <div class="progress"></div>
              </div>
              <h2 class="percentage">60%</h2>
            </div>
            <div class="card">
              <img src="../assets/images/sackboy.png" alt="" />
              <div class="card-info">
                <h2>Sackboy A Great Advanture</h2>
                <p>PS5 Version</p>
                <div class="progress"></div>
              </div>
              <h2 class="percentage">60%</h2>
            </div>
            <div class="card">
              <img src="../assets/images/spiderman.png" alt="" />
              <div class="card-info">
                <h2>Spiderman Miles Morales</h2>
                <p>PS5 Version</p>
                <div class="progress"></div>
              </div>
              <h2 class="percentage">60%</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="circle1"></div>
    <div class="circle2"></div>
    

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style>
@import "../styles/Home.css";
</style>
