(function() {
	/*
	 * 用于记录日期，显示的时候，根据dateObj中的日期的年月显示
	 */
	var dateObj = (function() {
		var _date = new Date(); // 默认为当前系统时间
		return {
			getDate: function() {
				return _date;
			},
			setDate: function(date) {
				_date = date;
			}
		};
	})();

	// 设置calendar div中的html部分
	renderHtml();
	// 表格中显示日期
	showCalendarData();
	// 绑定事件
	bindEvent();
	//显示日程列表上方的时间
	setListTitleDate()

	/**
	 * 渲染html结构
	 */
	
	
	renderSticky()

	function renderSticky() {
		setListDate(new Date());
	};

	////////查列表传参数的格式化
	function formatDate(date) {
		let year = date.getFullYear();
		let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : ("0" + (date.getMonth() + 1));
		let gDate = (date.getDate() > 9) ? date.getDate() : ("0" + date.getDate());
		
		let now = year + "" + month + "" + gDate;
		let day = date.getDate();
		return {
			day:day,
			now:now
		};
	};

	function addDate(date, n) {
		date.setDate(date.getDate() + n);
		return date;
	};

	function setListDate(date) {
		var cells = document.getElementById('monitor').getElementsByTagName('td');
		var clen = cells.length;
		var currentFirstDate;
		var week = date.getDay() - 1;
		date = addDate(date, week * -1);
		currentFirstDate = new Date(date);
		
		for(var i = 0; i < clen; i++) {
			
			///////给收缩后的日历加data属性
			let shortObj = formatDate(i == 0 ? addDate(date, -1) : addDate(date, 1))
			cells[i].innerHTML = shortObj.day; //星期日开始
			
			cells[i].setAttribute('data', shortObj.now)
			if(cells[i].innerHTML == getDateStr(new Date()).slice(6)) { // 当前天
				cells[i].className = 'currentDay';
			}
	/////////////////////////////////////
			cells[i].onclick = function(e){
				let shortData = e.target.getAttribute("data")
				setListTitleDate(shortData)
				let shortList = shortData.substr(0,4)+"-"+shortData.substr(4,2)+"-"+shortData.substr(6,2)
				getDateList(shortList)
			}
	/////////////////////////////////////
		}
	}

	function renderHtml() {
		var calendar = document.getElementById("calendar");
		var titleBox = document.createElement("div"); // 标题盒子 设置上一月 下一月 标题
		var bodyBox = document.createElement("div"); // 表格区 显示数据
		// 设置标题盒子中的html
		titleBox.className = 'calendar-title-box';
		titleBox.innerHTML = "<span class='prev-month' id='prevMonth'></span>" +
			"<span class='calendar-title' id='calendarTitle'></span>" +
			"<span id='nextMonth' class='next-month'></span>";
			
		calendar.appendChild(titleBox); // 添加到calendar div中

		// 设置表格区的html结构
		bodyBox.className = 'calendar-body-box';
		var _headHtml = "<tr>" +
			"<th>日</th>" +
			"<th>一</th>" +
			"<th>二</th>" +
			"<th>三</th>" +
			"<th>四</th>" +
			"<th>五</th>" +
			"<th>六</th>" +
			"</tr>";
		var _bodyHtml = "";

		// 一个月最多31天，所以一个月最多占6行表格
		for(var i = 0; i < 6; i++) {
			_bodyHtml += "<tr>" +
				"<td></td>" +
				"<td></td>" +
				"<td></td>" +
				"<td></td>" +
				"<td></td>" +
				"<td></td>" +
				"<td></td>" +
				"</tr>";
		}
		bodyBox.innerHTML = "<table id='calendarTable' class='calendar-table'>" +
			_headHtml + _bodyHtml +
			"</table>";
		// 添加到calendar div中
		calendar.appendChild(bodyBox);
		
	}

	/**
	 * 表格中显示数据，并设置类名
	 */
	function showCalendarData() {
		var _year = dateObj.getDate().getFullYear();
		var _month = dateObj.getDate().getMonth() + 1;
		var _dateStr = getDateStr(dateObj.getDate());

		// 设置顶部标题栏中的 年、月信息
		var calendarTitle = document.getElementById("calendarTitle");
		var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4, 2) + "月";
		calendarTitle.innerText = titleStr;

		// 设置表格中的日期数据
		var _table = document.getElementById("calendarTable");
		var _tds = _table.getElementsByTagName("td");
		

		var _firstDay = new Date(_year, _month - 1, 1); // 当前月第一天
		for(var i = 0; i < _tds.length; i++) {
			var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
			var _thisDayStr = getDateStr(_thisDay);
			_tds[i].innerText = _thisDay.getDate();
			
			//_tds[i].data = _thisDayStr;

			_tds[i].setAttribute('data', _thisDayStr);
			if(_thisDayStr == getDateStr(new Date())) { // 当前天
				_tds[i].className = 'currentDay';
			} else if(_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
				_tds[i].className = 'currentMonth'; // 当前月
			} else { // 其他月
				_tds[i].className = 'otherMonth';
			}
		}
		
	}

	/**
	 * 绑定上个月下个月事件
	 */
	function bindEvent() {
		var prevMonth = document.getElementById("prevMonth");
		var nextMonth = document.getElementById("nextMonth");
		addEvent(prevMonth, 'click', toPrevMonth);
		addEvent(nextMonth, 'click', toNextMonth);

		var table = document.getElementById("calendarTable");
		var tds = table.getElementsByTagName('td');

		//添加当月有日程的提示点
//		for (var i = 0; i < tds.length; i++) {
//			tds[i].style.position = "relative"
//			if(i == 15){
////				console.log(tds[i].getAttribute("data"))
//				let div = document.createElement("div")
//				div.className = "point";
//				tds[i].appendChild(div)
//				
//			}
//		}
		
		for(var i = 0; i < tds.length; i++) {
			addEvent(tds[i], 'click', function(e) {
				for (var j = 0; j < tds.length; j++) {
					if(tds[j].childNodes){
						for (var i = 0; i < tds[j].childNodes.length; i++) {
							if(tds[j].childNodes[i].className == "active"){
								tds[j].removeChild(tds[j].childNodes[i])
							}
						}
					}
				}
//				e.target.style.position = "relative";
				
				let div = document.createElement("div")
				div.className = "active";
				e.target.appendChild(div)
				
				
				let checkData = e.target.getAttribute("data")
				setListTitleDate(checkData)
				let checkList = checkData.substr(0,4)+"-"+checkData.substr(4,2)+"-"+checkData.substr(6,2)
				getDateList(checkList)

			});
		}

	}

	var _currentTime = function() {
		var year = new Date().getFullYear();
		var month = new Date().getMonth() + 1;
		var gDate = new Date().getDate();
		var defauleData = year + "" + month + "" + gDate;
		return defauleData;
	}
	
	
	//日程列表上方的日期显示
	function setListTitleDate(data) {

		if(data == undefined) {
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1) > 9 ? (new Date().getMonth() + 1) : ("0" + (new Date().getMonth() + 1));
			var gDate = new Date().getDate()>9?new Date().getDate():("0"+new Date().getDate());
			data = year + "" + month + "" + gDate;
		}
		
		
		
		let dataStr = data.substr(0, 4) + "-" + data.substr(4, 2) + "-" + data.substr(6, 2)
		let week = new Date(dataStr)
		let weekStr = ["日", "一", "二", "三", "四", "五", "六"]

		let str = data.substr(4, 2) + "月" + data.substr(6, 2) + "日"
		let listday = document.querySelector(".sch-list-day .day");
		let listweek = document.querySelector(".sch-list-day .week");
		listday.innerHTML = str;
		listweek.innerHTML = "周" + weekStr[week.getDay()]
		

	}

	/**
	 * 绑定事件
	 */
	function addEvent(dom, eType, func) {
		if(dom.addEventListener) { // DOM 2.0
			dom.addEventListener(eType, function(e) {
				func(e);
			});
		} else if(dom.attachEvent) { // IE5+
			dom.attachEvent('on' + eType, function(e) {
				func(e);
			});
		} else { // DOM 0
			dom['on' + eType] = function(e) {
				func(e);
			}
		}
	}

	/**
	 * 点击上个月图标触发
	 */
	function toPrevMonth() {
		var date = dateObj.getDate();
		dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
		showCalendarData();
	}

	/**
	 * 点击下个月图标触发
	 */
	function toNextMonth() {
		var date = dateObj.getDate();
		dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
		showCalendarData();
	}

	/**
	 * 日期转化为字符串， 4位年+2位月+2位日
	 */
	function getDateStr(date) {
		var _year = date.getFullYear();
		var _month = date.getMonth() + 1; // 月从0开始计数
		var _d = date.getDate();

		_month = (_month > 9) ? ("" + _month) : ("0" + _month);
		_d = (_d > 9) ? ("" + _d) : ("0" + _d);
		return _year + _month + _d;
	}

})();