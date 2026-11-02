/* PERSONAL CONTENT / 个人内容
   Replace text inside quotes; keep the quotes and commas.
   en = English, zh = 中文. Empty optional fields stay hidden.
   Text is rendered literally: no HTML is needed.
   Use https:// URLs or mailto:you@example.com for email.
   This file is public when the website is published.
   修改引号中的文字，保留引号和逗号；可选内容留空即可隐藏。

   START HERE / 从这里开始
   1. Edit the values below, save this file, then refresh index.html.
      修改下面的内容，保存本文件，然后刷新网页。
   2. Keep profile.js beside index.html; publish both files to GitHub Pages.
      两个文件放在同一目录，发布时一起上传。
   3. Fill in both en and zh for separate translations. If one is empty,
      the other language is shown instead. Leave BOTH empty to hide an optional field.
      en 和 zh 分别填写两种语言；缺少一种会使用另一种，两种都留空才隐藏可选项。
   4. name, headline, and introduction use default text if both values are empty.
      姓名、大标题和简介留空时会显示默认文字。
   5. For a quote inside text, write \"; for a line break, write \n inside the string.
      文本中的双引号写成 \"；换行写成 \n（简介和标题会折叠换行）。
      Line breaks are preserved in biography, note, facts, and project descriptions.
   Examples below are comments only; copy their values into the actual fields.
   以下示例仅为注释，请将示例中的值填入实际字段。
*/
window.SITE_PROFILE = {
  // NAME / 姓名：header, footer, and browser tab / 页首、页尾和浏览器标题。
  // Example: { en: "Alex Chen", zh: "陈晓" }
  name: { en: "Index", zh: "首页" },
  // HEADLINE / 首页大标题：keep it short / 建议简短。
  // Example: { en: "Design & research.", zh: "设计与研究。" }
  headline: { en: "A personal index.", zh: "个人索引。" },
  // INTRODUCTION / 首页简介：also used as the page description / 同时用于页面描述。
  // Example: { en: "I build tools for creative work.", zh: "我为创意工作制作工具。" }
  introduction: { en: "Work, observations, and ongoing interests.", zh: "作品、观察，以及持续关注的事。" },
  // ABOUT / 关于：each { en: ..., zh: ... } is one paragraph.
  // 每个对象是一段；复制一行并用逗号分隔即可增加段落。空段落不会显示。
  biography: [
    { en: "An independent space for things I make and think about.", zh: "记录创作与思考的独立空间。" },
    { en: "", zh: "" }
  ],
  // OPTIONAL FACTS / 可选资料：shown below About; blank rows are hidden.
  // 显示在“关于”下方，未填写的行自动隐藏。
  role: { en: "Student", zh: "学生" },       // e.g. "Designer" / "设计师"
  location: { en: "Suzhou", zh: "苏州" },   // e.g. "Shanghai" / "上海"
  interests: { en: "Physics, marine biology, music", zh: "物理，海洋生物，音乐" },  // e.g. "Photography, computing" / "摄影、计算机"
  currently: { en: "Learning AI/CS", zh: "学习AI/计算机" },  // e.g. "Learning typography" / "学习字体设计"
  // Optional short note beneath your biography / 自述下方的可选补充说明。
  note: { en: "", zh: "" },
  // SELECTED WORK / 作品选集
  // Fill in a title to show a project. Blank titles hide the entire entry.
  // 填写 title 即可显示项目；标题两种语言都为空时不显示。
  // Copy a whole entry to add another; separate entries with commas.
  // 复制完整对象即可添加项目，用逗号分隔；显示顺序与这里的顺序一致。
  // description is optional. A blank URL shows text without a link.
  // description 可留空；url 留空时不显示跳转箭头。
  // Example entry / 示例：
  // {
  //   title: { en: "Field Notes", zh: "观察手记" },
  //   description: { en: "A collection of photographs.", zh: "一组摄影作品。" },
  //   url: "https://example.com/field-notes"
  // }
  // If no projects have titles, the page shows its empty-state message.
  // 所有项目都未填写标题时，网页显示“作品将在这里更新”。
  projects: [
    { title: { en: "", zh: "" }, description: { en: "", zh: "" }, url: "" },
    { title: { en: "", zh: "" }, description: { en: "", zh: "" }, url: "" }
  ],
  // CONTACT / 联系：fill in BOTH a label and URL to show a link.
  // 同时填写链接名称和地址才会显示；复制对象可添加更多平台。
  // GitHub URL example: "https://github.com/your-username"
  // Email URL example: "mailto:you@example.com" (include mailto: / 不要遗漏前缀)
  // Website URL example: "https://your-domain.com"
  // Leave url empty to hide a link. With no links, the contact placeholder appears.
  // url 留空可隐藏链接；没有有效链接时显示“联系方式待补充”。
  links: [
    { label: { en: "GitHub", zh: "GitHub" }, url: "https://github.com/Haeiou414" },
    { label: { en: "Email", zh: "邮箱" }, url: "woodshole414@gmail.com" },
    { label: { en: "Elsewhere", zh: "其他平台" }, url: "" }
  ]
};
