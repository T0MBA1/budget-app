<script setup>
// alert(import.meta.env.VITE_APP_TITLE);
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
  </div>
  <!-- END Page Content -->
</template>
