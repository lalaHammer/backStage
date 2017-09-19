$(function() {
				$('#head').load('header.html',function(){
				$('#ulList li').eq(0).addClass('active').siblings().removeClass('active');
					
				});

				$('#foot').load('footer.html');
				var canvas=document.getElementById('can');
				var ctx=canvas.getContext('2d');
				$(window).resize(function(){
				
				});
				//创建图表对象
				var myChart=new Chart(ctx);
				//创建绘制数据
				var data = {
					labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周末"],//横坐标显示的项目
					datasets: [
							{
								fillColor : "rgb(127,127,255)",
								strokeColor : "red",
								pointColor : "green",
								pointStrokeColor : "red",
								data : [300,555,655,724,899,905,1000]
							},
							{
								fillColor : "rgba(127,255,127,0.5)",
								strokeColor : "rgb(71,200,71)",
								pointColor : "green",
								pointStrokeColor : "white",
								data : [314,455,755,814,999,905,1000]
							},
							{
								fillColor : "rgb(159,95,63)",
								strokeColor : "blue",
								pointColor : "green",
								pointStrokeColor : "white",
								data : [114,255,455,414,599,605,500]
							},
					]
				};
			myChart.Line(data,{scaleGridLineWidth:1});
});