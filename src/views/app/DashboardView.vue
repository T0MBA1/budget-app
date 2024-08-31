<script setup>
import { reactive } from "vue";

// vue-chartjs, for more info and examples you can check out https://vue-chartjs.org/ and http://www.chartjs.org/docs/ -->
import { Line } from "vue-chartjs";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

// Set Global Chart.js configuration
Chart.defaults.color = "#818d96";
Chart.defaults.scale.display = false;
Chart.defaults.scale.beginAtZero = true;
Chart.defaults.elements.point.radius = 0;
Chart.defaults.elements.point.hoverRadius = 0;
Chart.defaults.plugins.tooltip.radius = 3;
Chart.defaults.plugins.legend.labels.boxWidth = 12;

// Chart Earnings data
const earningsData = reactive({
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "This Year",
      fill: true,
      backgroundColor: "rgba(132, 94, 247, .3)",
      borderColor: "transparent",
      pointBackgroundColor: "rgba(132, 94, 247, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(132, 94, 247, 1)",
      data: [
        1250000, 1050000, 1200000, 950000, 1120000, 1280000, 1070000, 1210000,
        1290000, 1300000, 850000, 1190000,
      ],
    },
    {
      label: "Last Year",
      fill: true,
      backgroundColor: "rgba(33, 37, 41, .15)",
      borderColor: "transparent",
      pointBackgroundColor: "rgba(33, 37, 41, .3)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(33, 37, 41, .3)",
      data: [
        2200, 1700, 1100, 1900, 1680, 2560, 1340, 1450, 2000, 2500, 1550, 1880,
      ],
    },
  ],
});

// Chart Earnings options
const earningsOptions = reactive({
  maintainAspectRatio: false,
  tension: 0.4,
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 3000,
    },
  },
  interaction: {
    intersect: false,
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return " Rp." + context.parsed.y;
        },
      },
    },
  },
});

// Chart Sales data
const salesData = reactive({
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "This Year",
      fill: true,
      backgroundColor: "rgba(34, 184, 207, .3)",
      borderColor: "transparent",
      pointBackgroundColor: "rgba(34, 184, 207, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 184, 207, 1)",
      data: [175, 120, 169, 82, 135, 169, 132, 130, 192, 230, 215, 260],
    },
    {
      label: "Last Year",
      fill: true,
      backgroundColor: "rgba(33, 37, 41, .15)",
      borderColor: "transparent",
      pointBackgroundColor: "rgba(33, 37, 41, .3)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(33, 37, 41, .3)",
      data: [220, 170, 110, 215, 168, 227, 154, 135, 210, 240, 145, 178],
    },
  ],
});

// Chart Sales options
const salesOptions = reactive({
  maintainAspectRatio: false,
  tension: 0.4,
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 260,
    },
  },
  interaction: {
    intersect: false,
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.parsed.y + " Sales";
        },
      },
    },
  },
});
</script>

<template>
  <!-- Page Content -->
  <div class="content">
    <!-- Stats -->
    <div class="row">
      <div class="col-6 col-md-3 col-lg-6 col-xl-3">
        <BaseBlock tag="a" link-pop content-full href="javascript:void(0)">
          <div class="fs-sm fw-semibold text-uppercase text-muted">
            Pemasukan
          </div>
          <div class="fs-2 fw-normal text-dark">Rp. 12,500,000</div>
        </BaseBlock>
      </div>
      <div class="col-6 col-md-3 col-lg-6 col-xl-3">
        <BaseBlock tag="a" link-pop content-full href="javascript:void(0)">
          <div class="fs-sm fw-semibold text-uppercase text-muted">
            Pengeluaran
          </div>
          <div class="fs-2 fw-normal text-dark">Rp. 1,500,000</div>
        </BaseBlock>
      </div>
      <div class="col-6 col-md-3 col-lg-6 col-xl-3">
        <BaseBlock tag="a" link-pop content-full href="javascript:void(0)">
          <div class="fs-sm fw-semibold text-uppercase text-muted">
            Tabungan
          </div>
          <div class="fs-2 fw-normal text-dark">Rp. 25,000,000</div>
        </BaseBlock>
      </div>
    </div>
    <!-- END Stats -->

    <!-- Dashboard Charts -->
    <div class="row">
      <div class="col-lg-6">
        <BaseBlock title="Pemasukan Rp.">
          <template #options>
            <button type="button" class="btn-block-option">
              <i class="si si-settings"></i>
            </button>
          </template>

          <template #content>
            <div class="block-content p-0 text-center overflow-hidden">
              <div class="pt-3 m-n1">
                <Line
                  :data="earningsData"
                  :options="earningsOptions"
                  style="height: 350px"
                />
              </div>
            </div>
            <div class="block-content">
              <div class="row items-push text-center py-3">
                <div class="col-6 col-xl-3">
                  <i class="fa fa-wallet fa-2x text-muted"></i>
                  <div class="text-muted mt-3">$148,000</div>
                </div>
                <div class="col-6 col-xl-3">
                  <i class="fa fa-angle-double-up fa-2x text-muted"></i>
                  <div class="text-muted mt-3">+9% Earnings</div>
                </div>
                <div class="col-6 col-xl-3">
                  <i class="fa fa-ticket-alt fa-2x text-muted"></i>
                  <div class="text-muted mt-3">+20% Tickets</div>
                </div>
                <div class="col-6 col-xl-3">
                  <i class="fa fa-users fa-2x text-muted"></i>
                  <div class="text-muted mt-3">+46% Clients</div>
                </div>
              </div>
            </div>
          </template>
        </BaseBlock>
      </div>
      <div class="col-lg-6">
        <BaseBlock title="Pengeluaran">
          <template #options>
            <button type="button" class="btn-block-option">
              <i class="si si-settings"></i>
            </button>
          </template>

          <template #content>
            <div class="block-content p-0 text-center overflow-hidden">
              <div class="pt-3 m-n1">
                <Line
                  :data="salesData"
                  :options="salesOptions"
                  style="height: 350px"
                />
              </div>
            </div>
            <div class="block-content">
              <div class="row items-push text-center py-3">
                <div class="col-6 col-xl-3">
                  <i class="fab fa-wordpress fa-2x text-muted"></i>
                  <div class="text-muted mt-3">+20% Themes</div>
                </div>
                <div class="col-6 col-xl-3">
                  <i class="fa fa-font fa-2x text-muted"></i>
                  <div class="text-muted mt-3">+25% Fonts</div>
                </div>
                <div class="col-6 col-xl-3">
                  <i class="fa fa-archive fa-2x text-muted"></i>
                  <div class="text-muted mt-3">-10% Icons</div>
                </div>
                <div class="col-6 col-xl-3">
                  <i class="fa fa-paint-brush fa-2x text-muted"></i>
                  <div class="text-muted mt-3">+8% Graphics</div>
                </div>
              </div>
            </div>
          </template>
        </BaseBlock>
      </div>
    </div>
    <!-- END Dashboard Charts -->
  </div>
  <!-- END Page Content -->
</template>
