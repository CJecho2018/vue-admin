<template>
	<div class="side-bar fillcontain">
		<el-row style="height: 100%;">
      <el-menu :default-active="defaultActive"
      style="min-height: 100%;"
        background-color="#232E42"
        text-color="#fff"
        router
      >
        <el-menu-item index="manage">
          <i class="el-icon-menu"></i>
          首页
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            数据管理
          </template>
          <el-menu-item index="manageUser">用户列表</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-circle-plus-outline"></i>
            添加店铺
          </template>
          <el-menu-item index="addShop">添加店铺</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            图表
          </template>
          <el-menu-item index="baseEcharts">图表</el-menu-item>
      </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-promotion"></i>
            富文本编辑器
          </template>
          <el-menu-item index="editor">富文本编辑器</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-rank"></i>
            拖拽列表
          </template>
          <el-menu-item index="drafting">拖拽列表</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-warning-outline"></i>
            报错处理
          </template>
        </el-submenu>
      </el-menu>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>

<style scoped>
  .side-bar{
    width:200px;
    height:100%;
    display:inline-block;
    vertical-align:top;
    font-weight: 500;
  }
</style>
