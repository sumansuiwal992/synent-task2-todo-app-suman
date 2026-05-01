
let tasks = JSON.parse(localStorage.getItem('taskflow_tasks') || '[]');
let currentFilter = 'all';

/* ---------- SELECTORS ---------- */
const taskInput = document.getElementById('taskInput');
const addBtn    = document.getElementById('addBtn');
const taskList  = document.getElementById('taskList');
const clearBtn  = document.getElementById('clearBtn');
const tabs      = document.querySelectorAll('.tab');

const statTotal   = document.getElementById('stat-total');
const statDone   = document.getElementById('stat-done');
const statPending = document.getElementById('stat-pending');
