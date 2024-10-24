var basicChartJS = {
    chart: null,
    chartObject: null, //차트가 표시될 canvasID
    chartType: null, //차트 종류
    chartLabels: null,
    chartDataSets: null,
    chartOptions: null,


    // 시작시 차트형태와 캔버스ID, 옵션을주고 시작
    superinit: function (canvasObject, type = "bar"){
      this.chartObject = canvasObject;
      this.chartType = type;
    },

    draw: function (){
        if(this.chart == null){
            this.chart = new Chart(this.chartObject,
                {
                    type: this.chartType,
                    data: {
                        labels: this.chartLabels,
                        datasets: this.chartDataSets
                    },
                    options: this.chartOptions
                });
        }else{
            this.reDraw();
        }
    },

    reDraw: function(){
        this.chart.labels = this.chartLabels;
        this.chart.datasets = this.chartDataSets;
        this.chart.update();
    },

    setListDataLabel: function(dataList, labelName, valueName){
        var labels = [];
        var valueList = [];

        for(data of dataList){
            for(var[key,value] of Object.entries(data)){
                if(key === labelName){
                    labels.push(value);
                }else if(key === valueName){
                    valueList.push(value);
                }
            }
        }

        return [labels, valueList]
    }

}