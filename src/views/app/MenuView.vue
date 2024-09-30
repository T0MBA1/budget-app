<script></script>

<template>
  <div class="content">
    <div class="row">
      <div class="col-6">
        <!-- Default Position -->
        <RouterLink class="nav-link" to="/account">
          <BaseBlock content-full>
            <div class="text-center py-4">
              <p>
                <i class="fa fa-3x fa-database text-gray"></i>
              </p>
              <h4 class="mb-0">Accounts</h4>
            </div>
          </BaseBlock>
        </RouterLink>
        <!-- END Default Position -->
      </div>
      <div class="col-6">
        <!-- Bottom Right -->
        <BaseBlock content-full>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-users text-gray"></i>
            </p>
            <h4 class="mb-0">User</h4>
          </div>
        </BaseBlock>
        <!-- END Bottom Right -->
      </div>
      <div class="col-6">
        <!-- Bottom Left -->
        <BaseBlock content-full>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-cog text-gray"></i>
            </p>
            <h4 class="mb-0">Settings</h4>
          </div>
        </BaseBlock>
        <!-- END Bottom Left -->
      </div>
      <div class="col-6">
        <!-- Top Left -->
        <BaseBlock content-full>
          <div class="text-center py-4">
            <p>
              <i class="fa fa-3x fa-cog text-gray"></i>
            </p>
            <h4 class="mb-0">Settings</h4>
          </div>
        </BaseBlock>
        <!-- END Top Left -->
      </div>
    </div>
    <!-- END Bookmark Ribbon -->
  </div>
</template>
