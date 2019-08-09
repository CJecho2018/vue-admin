<template>
  <div class="editor">
    <side-bar />
    <my-header />
    <div class="container" >
      <div class="edit">
        <!-- bidirectional data binding（双向数据绑定） -->
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          @change="onEditorChange($event)"
        ></quill-editor>

        <el-button type="primary" @click="open" class="mySubmit">提交</el-button>      
      </div>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import myHeader from "../components/Header";
import sideBar from "../components/SideBar";

export default {
  data() {
    return {
      content: "<h5>hello world</h5>",
      editorOption: {
        theme:'snow'
      }
    };
  },
  components: {
    quillEditor,
    myHeader,
    sideBar
  },
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    open() {
      this.$message({
        message:"提交成功！",
        type:'success'
      })
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  }
};
</script>
<style scoped>
  .container{
    width:calc(100% - 200px);
    position:absolute;
    top:80px;
    left:200px;
  }
  .quill-editor{
    width:90%;
    height:350px;
    margin:10px auto;
  }
  .mySubmit{
    position:absolute;
    bottom:-120px;
    left:5%;
  }
</style>