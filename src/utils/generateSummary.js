export default function generateSummary(summary, summaryMax) {
  summary = summary.replaceAll(/<\w>|<\/\w>/gim, "");
  if (summaryMax > 0) {
    let cutat = summary.lastIndexOf(" ", summaryMax);
    if (cutat != -1) {
      return summary.substring(0, cutat) + "...";
    }
  }
  return summary;
}
