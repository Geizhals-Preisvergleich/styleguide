<script>
  export let size = "large";
</script>

<style>
  .loading_spinner {
    display: block;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(0, 33, 60, 0.2);
    border-top-color: #059;
    border-radius: 100%;
    animation: spin 1s linear infinite;

    margin-top: 3rem; /* for this example only */
    margin-bottom: 3rem; /* for this example only */
  }

  .large {
    width: 40px;
    height: 40px;
  }
  .small {
    width: 24px;
    height: 24px;
    border-width: 1px;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="loading_spinner" class:large="{size == "large"}" class:small="{size == "small"}"/>
