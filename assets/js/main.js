// Theme toggle
const toggle = document.getElementById('theme-toggle');
// Load/persist omitted for brevity

// GitHub Calendar init
GitHubCalendar('#calendar', 'Mohit9674', { responsive: true, tooltips: true });

// Contributions Chart
async function fetchEvents(){
  const res = await fetch('https://api.github.com/users/Mohit9674/events/public');
  const data = await res.json();
  const counts = {};
  data.forEach(e=>{
    const d=new Date(e.created_at).toLocaleDateString();
    counts[d]=(counts[d]||0)+1;
  });
  return counts;
}
function drawChart(counts){
  const labels=Object.keys(counts).slice(0,30).reverse();
  const vals=labels.map(d=>counts[d]);
  new Chart(document.getElementById('contribChart'),{ type:'bar', data:{ labels, datasets:[{ label:'Events', data:vals }] } });
}
fetchEvents().then(drawChart);