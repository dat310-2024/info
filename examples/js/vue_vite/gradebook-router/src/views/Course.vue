<template>
  <div>
    <h1>Grades for {{ course.course_id }}: {{ course.course_name }}</h1>
    <my-table
      v-bind:headings="headings"
      v-bind:rows="grades"
      v-bind:table-key="'course' + course_id"
    ></my-table>

    <h1>Add grades</h1>
    <grade-form v-bind:course_id="course_id"></grade-form>
    <button v-on:click="goBack">To main</button>
  </div>
</template>

<script>
import GradeForm from "../components/GradeForm.vue";
import MyTable from "../components/MyTable.vue";
import state from "../store.js";

export default {
  name: "course-page",
  props: ["course_id"],
  components: {
    MyTable,
    GradeForm,
  },
  methods: {
    goBack: function () {
      // go to main page:
      this.$router.push("/");
      // go back to last page (same as hitting back on browser)
      //this.$router.go(-1);
    },
  },
  computed: {
    grades() {
      return state.courseGrades(this.course_id);
    },
    course() {
      return state.course(this.course_id);
    },
    headings: () => {
      return [
        { name: "Student number", key: "student_no" },
        { name: "Grade", key: "grade" },
      ];
    },
  },
};
</script>
