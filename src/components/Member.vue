<template>
  <div class="member">
    <img src="../assets/kemokeys.jpg" alt />
    <div class="info">
      <p>{{ first_name + " " + last_name }}</p>
      <p>3 hours ago</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Member",
  props: ["first_name", "last_name"],
};
</script>

<style lang="scss" scoped>
.member {
  display: flex;
  margin-bottom: 10px;
  img {
    width: 40px;
    height: auto;
    border-radius: 50%;
  }
  .info {
    margin-left: 15px;
    line-height: 1.5;
    p {
      font-weight: 500;
      margin-bottom: 0 !important;
    }
    p:nth-child(2) {
      font-size: 10px;
      opacity: 60%;
    }
  }
}
</style>
