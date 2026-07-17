(function () {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const bg = isDark ? "#0A1F3F" : "#FFFFFF";
  const text = isDark ? "#00C2BA" : "#0A1F3F";
  const accent = "#00C2BA";
  const dim = isDark ? "#9CA3AF" : "#6B7280";

  console.clear();

  console.log(
    `%c
    ╔══════════════════════════════════════════╗
    ║                                          ║
    ║   %c⬡%c  %cOneCard%c — Smart Student Management  %c║
    ║                                          ║
    ║   %cPowered by Herman Software Solutions%c   %c║
    ║                                          ║
    ║   %c📧 jaingsalim@gmail.com%c                 %c║
    ║   %c🌐 herman-software-website.vercel.app%c    %c║
    ║   %c💻 github.com/jiangsalim%c                 %c║
    ║                                          ║
    ║   %c"Building smart systems for Ugandan%c     %c║
    ║   %cschools — one card at a time."%c          %c║
    ║                                          ║
    ╚══════════════════════════════════════════╝
    `,
    `color: ${dim}; font-size: 11px;`,
    `color: ${accent}; font-size: 24px;`, // Hexagon
    `color: ${dim}; font-size: 11px;`,
    `color: ${accent}; font-size: 18px; font-weight: bold;`, // OneCard
    `color: ${text}; font-size: 18px;`, // rest of title
    `color: ${dim}; font-size: 11px;`,
    `color: ${text}; font-size: 13px; font-weight: bold;`, // Herman
    `color: ${dim}; font-size: 11px;`,
    `color: ${dim}; font-size: 11px;`,
    `color: ${dim}; font-size: 12px;`, // email
    `color: ${dim}; font-size: 11px;`,
    `color: ${dim}; font-size: 12px;`, // website
    `color: ${dim}; font-size: 11px;`,
    `color: ${dim}; font-size: 12px;`, // github
    `color: ${dim}; font-size: 11px;`,
    `color: ${accent}; font-size: 12px; font-style: italic;`, // quote line 1
    `color: ${dim}; font-size: 11px;`,
    `color: ${accent}; font-size: 12px; font-style: italic;`, // quote line 2
    `color: ${dim}; font-size: 11px;`
  );

  console.log(
    `%c👋 Hello developer! Interested in working together? Reach out at jaingsalim@gmail.com`,
    `color: ${text}; font-size: 13px; font-weight: bold;`
  );

  console.log(
    `%c🔍 View source at: %chttps://github.com/jiangsalim/onecard-landing`,
    `color: ${dim}; font-size: 12px;`,
    `color: ${accent}; font-size: 12px; text-decoration: underline;`
  );
})();