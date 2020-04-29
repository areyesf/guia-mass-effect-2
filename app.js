const app = new Vue({
  el: "#app",
  data: {
    missionsList: [],
  },
  methods: {
    getJson() {
      fetch("./sources/missions.json")
        .then((response) => response.json())
        .then((data) => {
          this.missionsList = data;
          this.updateLocalStorage();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeStatusMain(index) {
      const status = this.missionsList.mains[index].status;

      switch (status) {
        case true:
          this.missionsList.mains[index].status = false;
          break;
        case false:
          this.missionsList.mains[index].status = true;
          break;
      }
      this.updateLocalStorage();
    },
    changeStatusSecondary(index, subindex) {
      const status = this.missionsList.secondaries[index].missions[subindex]
        .status;
      switch (status) {
        case true:
          this.missionsList.secondaries[index].missions[
            subindex
          ].status = false;
          break;
        case false:
          this.missionsList.secondaries[index].missions[subindex].status = true;
          break;
      }
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem("ME2-MISSIONS", JSON.stringify(this.missionsList));
    },
    resetList(){
      localStorage.clear();
      location.reload();
    }
  },
  created: function () {
    let localData = JSON.parse(localStorage.getItem("ME2-MISSIONS"));
    if (localData === null || localData.length === 0) {
      this.getJson();
    } else {
      this.missionsList = localData;
      this.updateLocalStorage();
    }
  },
});
