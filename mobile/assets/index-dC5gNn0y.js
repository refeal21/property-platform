const d=[{id:"1",time:"09:32",content:"张琪完成大堂保洁巡查，上传5张留痕照片",type:"worklog"},{id:"2",time:"09:15",content:"新工单：B区电梯故障 → 已派单给工程部芦强",type:"workorder"},{id:"3",time:"08:55",content:"品质巡检：A区绿化养护评分 95 分",type:"quality"},{id:"4",time:"08:40",content:"租户报修：5层502室水管漏水（微信）",type:"repair"},{id:"5",time:"08:20",content:"早班全员到岗，考勤正常",type:"system"},{id:"6",time:"08:00",content:"系统自动生成昨日工作日报",type:"system"}],c=[{id:"WO2026031201",title:"B区电梯异响维修",type:"设备故障",status:"处理中",priority:"紧急",creator:"曹齐飞",assignee:"芦强",createdAt:"2026-03-12 08:30",description:"B区2号电梯运行时有明显异响，需要紧急检修处理。",area:"B区"},{id:"WO2026031202",title:"A区大堂灯光故障",type:"日常维修",status:"待接单",priority:"高",creator:"张琪",assignee:"",createdAt:"2026-03-12 09:15",description:"A区大堂3盏筒灯不亮，影响大堂照明效果。",area:"A区"},{id:"WO2026031203",title:"C区绿化带垃圾清理",type:"环境问题",status:"已完成",priority:"中",creator:"曹齐飞",assignee:"张琪",createdAt:"2026-03-11 14:00",completedAt:"2026-03-11 16:30",description:"C区南侧绿化带有装修垃圾堆放。",area:"C区"},{id:"WO2026031204",title:"租户投诉噪音扰民",type:"客服投诉",status:"处理中",priority:"高",creator:"石凌",assignee:"曹齐飞",createdAt:"2026-03-11 20:00",description:"5层租户投诉楼上装修噪音，已超出允许时段。",area:"A区"},{id:"WO2026031205",title:"地下车库消防通道被堵",type:"安保事件",status:"已完成",priority:"紧急",creator:"力乙轩",assignee:"曹顺",createdAt:"2026-03-11 10:00",completedAt:"2026-03-11 11:00",description:"B1层消防通道被私家车占用。",area:"地下"},{id:"WO2026031206",title:"D区水泵房巡检异常",type:"设备故障",status:"待接单",priority:"中",creator:"系统",assignee:"",createdAt:"2026-03-12 07:00",description:"水泵房自动巡检报警：水压偏低。",area:"D区"},{id:"WO2026031207",title:"前台服务台灯带更换",type:"日常维修",status:"已关闭",priority:"低",creator:"陈小凤",assignee:"芦强",createdAt:"2026-03-10 15:00",completedAt:"2026-03-10 17:00",description:"前台展示柜灯带老化需更换。",area:"A区"},{id:"WO2026031208",title:"A区门禁系统升级",type:"设备故障",status:"处理中",priority:"中",creator:"曹齐飞",assignee:"马金忠",createdAt:"2026-03-10 09:00",description:"A区主入口门禁刷卡延迟。",area:"A区"}],u=[{id:"WL001",staff:"张琪",businessLine:"环境",content:"大堂保洁完成",images:["/mock/img1.jpg","/mock/img2.jpg"],location:"大堂",createdAt:"2026-03-12 09:32"},{id:"WL002",staff:"曹顺",businessLine:"秩序",content:"A区巡逻签到",images:["/mock/img3.jpg"],location:"A区北门",createdAt:"2026-03-12 09:15"},{id:"WL003",staff:"芦强",businessLine:"工程",content:"B区电梯机房巡检",images:["/mock/img4.jpg","/mock/img5.jpg"],location:"B区电梯机房",createdAt:"2026-03-12 08:45"},{id:"WL004",staff:"陈小凤",businessLine:"客服",content:"前台接待来访客户",images:["/mock/img7.jpg"],location:"客服中心",createdAt:"2026-03-12 08:30"}],p=[{id:"QT001",name:"A区日常保洁巡检",type:"SOP任务",status:"已完成",route:"A区全域",assignee:"常领",scheduledAt:"2026-03-12 08:00",completedAt:"2026-03-12 09:30",score:95,issues:1},{id:"QT002",name:"B区安保岗位检查",type:"SOP任务",status:"执行中",route:"B区入口+巡逻线",assignee:"力乙轩",scheduledAt:"2026-03-12 10:00",issues:0},{id:"QT003",name:"C区绿化养护专项",type:"专项检查",status:"待执行",route:"C区绿化带",assignee:"张琪",scheduledAt:"2026-03-12 14:00",issues:0},{id:"QT004",name:"消防通道畅通复查",type:"整改复查",status:"已完成",route:"全域消防通道",assignee:"常领",scheduledAt:"2026-03-11 15:00",completedAt:"2026-03-11 16:00",score:100,issues:0},{id:"QT005",name:"D区设备房巡检",type:"SOP任务",status:"已过期",route:"D区设备房",assignee:"芦强",scheduledAt:"2026-03-11 09:00",issues:2}],l=[{id:"N001",title:"关于3月份排班调整的通知",type:"通知",content:`各部门：

根据项目运营需要，经研究决定对3月份排班进行如下调整：
1. 秩序部夜班巡逻增加B区地下车库巡查；
2. 客服部前台服务时间延长至18:30；
3. 环境部增加C区绿化养护专项排班。

请各部门经理于3月12日前完成人员调配。

行政综合部
2026年3月10日`,publisher:"曹齐飞",publishedAt:"2026-03-10",read:!0},{id:"N002",title:"消防安全月活动方案",type:"公告",content:`全体员工：

3月定为"消防安全月"，安排如下：
一、消防通道专项检查（3月8日-15日）
二、消防设施设备检测（3月10日-20日）
三、消防演练（3月25日）

请各部门积极配合。

秩序部
2026年3月8日`,publisher:"力乙轩",publishedAt:"2026-03-08",read:!1},{id:"N003",title:"第一季度工作总结会议纪要",type:"会议纪要",content:`会议时间：2026年3月5日 14:00
参会人员：曹齐飞、力乙轩、石凌、张琪、芦强、常领

一、各部门汇报：秩序部处理安保事件23起；客服部受理投诉47件；环境部保洁达标率96%；工程部完成维修126项。
二、存在问题：B区电梯老化、夜间安保人员不足。
三、下季度重点：推进智慧物业平台上线。`,publisher:"常领",publishedAt:"2026-03-05",read:!0},{id:"N004",title:"五一假期值班安排",type:"通知",content:`各部门：

五一放假5月1日至5月5日。
值班安排：
- 5月1-2日：王成宇带班，马金忠值班；
- 5月3-4日：曹顺带班，芦强值班；
- 5月5日：全员正常上班。

请提前做好工作交接。

行政综合部
2026年3月12日`,publisher:"曹齐飞",publishedAt:"2026-03-12",read:!1}],m=[{id:"RP001",title:"1栋502室水管漏水",ownerName:"张先生",ownerPhone:"139****5678",unit:"A区1栋502",category:"水电",status:"维修中",source:"微信",createdAt:"2026-03-12 08:40",description:"厨房水管接口处漏水，已用盆接住。"},{id:"RP002",title:"3栋电梯按钮失灵",ownerName:"王女士",ownerPhone:"136****9012",unit:"B区3栋",category:"电梯",status:"待派单",source:"电话",createdAt:"2026-03-11 16:20",description:"3栋2号电梯5楼按钮无反应。"},{id:"RP003",title:"门禁卡无法识别",ownerName:"李先生",ownerPhone:"158****3456",unit:"A区2栋",category:"其他",status:"已完成",source:"前台",createdAt:"2026-03-10 09:00",completedAt:"2026-03-10 11:30",description:"A区北门门禁刷卡无反应。",rating:5},{id:"RP004",title:"空调外机噪音大",ownerName:"赵女士",ownerPhone:"137****7890",unit:"C区5栋1801",category:"其他",status:"待派单",source:"微信",createdAt:"2026-03-12 10:15",description:"空调外机运行时噪音异常，影响休息。"}],A={name:"曹齐飞",role:"项目经理",phone:"138****4501",avatarUrl:"/property-platform/mobile/staff/cao-qifei.jpg",project:"亚洲金融大厦",stats:{monthOrders:42,monthLogs:128,monthInspections:15}},y=(()=>{const a=[],r=new Date(2026,2,12);for(let e=0;e<30;e++){const t=new Date(r);t.setDate(t.getDate()-e);const n=t.getDay(),i=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;if(n===0||n===6)continue;const o=Math.random();let s="正常";e===0?s="未到":o<.08?s="迟到":o<.12&&(s="请假"),a.push({date:i,status:s})}return a})(),g=[{id:"DD001",date:"2026-03-12",author:"曹齐飞",authorLevel:"L1",department:"行政综合部",workContent:"上午主持项目周例会，部署本周重点工作；下午巡查A区、B区现场，检查保洁和绿化养护情况。",coordination:"协调工程部加快B区电梯维修进度",decisions:"批准3月排班调整方案",externalComm:"与租户沟通五一活动方案",tomorrowPlan:"参加集团季度述职会议",issues:"B区电梯维修配件到货延迟",status:"已提交",createdAt:"2026-03-12 18:00"},{id:"DD002",date:"2026-03-12",author:"力乙轩",authorLevel:"L3",department:"秩序部",workContent:"完成B区安保岗位检查，处理地下车库消防通道占用事件。",attendance:{onDuty:12,leave:1,absent:0},tomorrowPlan:"组织消防演练预演",issues:"夜班人员不足需协调",status:"已提交",createdAt:"2026-03-12 17:30"},{id:"DD003",date:"2026-03-12",author:"石凌",authorLevel:"L4",department:"客服部",workContent:"处理租户投诉3件，接待来访12人次，完成满意度回访8户。",attendance:{onDuty:5,leave:0,absent:0},tomorrowPlan:"跟进噪音投诉处理结果",status:"已提交",createdAt:"2026-03-12 17:45"},{id:"DD004",date:"2026-03-12",author:"张琪",authorLevel:"L5",department:"环境部",workContent:"完成大堂保洁、A区绿化带修剪。",workload:"保洁面积约2000㎡",tomorrowPlan:"清理C区绿化带装修垃圾",status:"已提交",createdAt:"2026-03-12 17:00"},{id:"DD005",date:"2026-03-11",author:"曹齐飞",authorLevel:"L1",department:"行政综合部",workContent:"处理消防通道占用事件，审批设备采购申请。",coordination:"联系消防部门确认整改标准",decisions:"通过水泵房设备更换方案",tomorrowPlan:"主持项目周例会",status:"已提交",createdAt:"2026-03-11 18:00"},{id:"DD006",date:"2026-03-11",author:"芦强",authorLevel:"L4",department:"工程部",workContent:"检修B区电梯，排查D区水泵房水压异常。",attendance:{onDuty:4,leave:0,absent:0},tomorrowPlan:"等待电梯配件到货后继续维修",issues:"电梯配件供应商交期延迟2天",status:"已提交",createdAt:"2026-03-11 17:30"}];export{y as a,u as b,A as c,g as d,d as e,l as n,p as q,m as r,c as w};
