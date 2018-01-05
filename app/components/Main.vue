<template>
  <div class="container">
    <div class="row">
      <div class="page-header">
        <h1>Vue Tree</h1>
        <div class="col-xs-12 text-center">
          <router-link :to="{name: 'Docs'}" class="btn btn-lg btn-primary"><i class="fa fa-book" aria-hidden="true"></i> Docs</router-link>
          <a href="https://github.com/pragmasphere/vue-tree" class="btn btn-lg btn-default">
            <i class="fa fa-github" aria-hidden="true"></i> Github</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 text-center">
        <h2>Simple Tree Component for VueJS</h2>
      </div>
    </div>
    <div class="row badges">
      <div class="col-xs-12 text-center">
        <p><a href="https://www.npmjs.com/package/@pragmasphere/vue-tree">
          <img src="https://img.shields.io/npm/v/@pragmasphere/vue-tree.svg" alt="npm"/>
        </a></p>
      </div>
    </div>
    <div class="row">
      <vuep :template="examples.home" :scope="scope"></vuep>
    </div>
  </div>
</template>
<style lang="scss">
.badges {
  padding-bottom: 1em;
}
</style>
<script lang="ts" src="./Main.ts"></script>
