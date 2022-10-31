<template>
  <div class="comment">
    <div class="info">
      <img src="../assets/kemokeys.jpg" alt />
      <p>crazy people</p>
    </div>
    <div class="inputComment">
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
        voluptas.
      </span>
    </div>
    <div class="tools">
      <p>Reply</p>
      <p>Edit</p>
      <p>Delete</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Comment",
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  flex-direction: column;
  .info {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: auto;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
  .inputComment {
    background-color: #eee;
    border-radius: 20px;
    padding: 10px;
    margin-left: 40px;
  }
  .tools {
    display: flex;
    margin-top: 10px;
    margin-left: 40px;
    p {
      margin-right: 15px;
    }
  }
}
</style>
