const jobs = [
  {
    // card 1
    company: 'Mobile First Corp',
    role: 'React Native Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130,000 - $175,000',
    description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
    status: 'not applied',
  },
  {
    // card 2
    company: 'WebFlow Agency',
    role: 'Web Designer & Developer',
    location: 'Los Angeles, CA',
    type: 'Part-time',
    salary: '$80,000 - $120,000',
    description:'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
    status: 'not applied',
  },
  {
    // card 3
    company: 'DataViz Solutions',
    role: 'Data Visualization Specialist',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$125,000 - $165,000',
    description:
      'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
    status: 'not applied',
  },
  {
    //  card 4
    company: 'CloudScale Inc',
    role: 'Backend Developer',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$140,000 - $190,000',
    description:'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.',
    status: 'not applied',
  },
  {
    // card 5
    company: 'Innovation Labs',
    role: 'UI/UX Engineer',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $150,000',
    description:'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.',
    status: 'not applied',
  },
  {
    // card 6
    company: 'MegaCorp Solutions',
    role: 'JavaScript Developer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130,000 - $170,000',
    description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.',
    status: 'not applied',
  },
  {
    // card 7
    company: 'Startup XYZ',
    role: 'Full Stack Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description:'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.',
    status: 'not applied',
  },
  {
    // card 8
    company: 'TechCorp Industries',
    role: 'Senior Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: ' $130,000 - $175,000',
    description:'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.',
    status:'not applied',
  },
];

let currentTab = 'all';

function getStatusBadgeClass(status) {
  if (status === 'interview') return 'badge-interview';
  if (status === 'rejected') return 'badge-rejected';
  return 'badge-not-applied';
}

function getStatusLabel(status) {
  if (status === 'interview')
     return 'INTERVIEW';
  if (status === 'rejected') 
    return 'REJECTED';
  return 'NOT APPLIED';
}


function renderCards() {
  const container = document.getElementById('cards-container');
  const emptyState = document.getElementById('empty-state');

  const filtered = jobs.filter(job => {
    if (currentTab === 'all') return true;
    return job.status === currentTab;
  });

  const total = jobs.length;
  const count = jobs.filter(j => j.status !== 'not applied').length;

  const displayCount = currentTab === 'all' ? count : filtered.length;

  document.getElementById('jobs-count-label').textContent =
    `${total} jobs`;

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

   container.innerHTML = filtered
    .map(job => {
      const interviewSelected = job.status === 'interview' ? 'selected' : '';
      const rejectedSelected = job.status === 'rejected' ? 'selected' : '';

      return `
      <div class="job-card bg-white p-5 rounded shadow border border-gray-200" id="card-${job.id}">
        <div class="flex justify-between">
          <div>
            <h3 class="font-semibold text-gray-800">${job.company}</h3>
            <p class="text-sm text-gray-600">${job.role}</p>
            <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>
          </div>
          <button
            class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500 transition-colors"
            title="Delete"
            onclick="deleteJob(${job.id})">
            <img class="w-5 h-5 bg[#64748B]" src="delete.png" alt="delete">
          </button>
        </div>
        <div class="mt-3">
          <span class="status-badge ${getStatusBadgeClass(job.status)}">${getStatusLabel(job.status)}</span>
          <p class="text-sm text-gray-600 mt-2">${job.description}</p>
        </div>
        <div class="mt-4 flex gap-3">
          <button
            class="btn-interview ${interviewSelected} border border-green-500 text-green-600 px-3 py-1 rounded font-medium hover:bg-green-50"
            onclick="setStatus(${job.id}, 'interview')">
            INTERVIEW
          </button>
          <button
            class="btn-rejected ${rejectedSelected} border border-red-500 text-red-600 px-3 py-1 rounded font-medium hover:bg-red-50"
            onclick="setStatus(${job.id}, 'rejected')">
            REJECTED
          </button>
        </div>
      </div>`;
    })
    .join('');
  }