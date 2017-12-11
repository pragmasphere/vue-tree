<template>
  <div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="jumbotron">
              <div class="row">
                <div class="col-xs-12 text-center">
                  <h1>Vue Tree</h1>
                  <h2>Simple yet extendable Tree Component for VueJS</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 text-center">
                  <router-link :to="{name: 'Docs'}" class="btn btn-lg btn-primary"><i class="fa fa-book" aria-hidden="true"></i> Docs</router-link>
                  <a href="https://github.com/pragmasphere/vue-tree" class="btn btn-lg btn-default"><i class="fa fa-github" aria-hidden="true"></i> Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4">
            <div class="well sample-tree-container">
              <vue-tree></vue-tree>
            </div>
          </div>
        </div>
        <div class="row">

        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
    .sample-tree-container {
      padding: 0.5em;
      height: 14em;
    }
</style>
<script lang="ts" src="./Main.ts"></script>
