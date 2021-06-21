import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthCoverLoginComponent } from "./auth/auth-cover-login/auth-cover-login.component";
import { AuthCoverRePasswordComponent } from "./auth/auth-cover-re-password/auth-cover-re-password.component";
import { AuthCoverSignupComponent } from "./auth/auth-cover-signup/auth-cover-signup.component";
import { AuthLoginThreeComponent } from "./auth/auth-login-three/auth-login-three.component";
import { AuthLoginComponent } from "./auth/auth-login/auth-login.component";
import { AuthRePasswordThreeComponent } from "./auth/auth-re-password-three/auth-re-password-three.component";
import { AuthRePasswordComponent } from "./auth/auth-re-password/auth-re-password.component";
import { AuthSignupThreeComponent } from "./auth/auth-signup-three/auth-signup-three.component";
import { AuthSignupComponent } from "./auth/auth-signup/auth-signup.component";

import { AccountMembersComponent } from "./core/components/account-members/account-members.component";
import { AccountMessagesComponent } from "./core/components/account-messages/account-messages.component";
import { AccountPaymentsComponent } from "./core/components/account-payments/account-payments.component";
import { AccountProfileComponent } from "./core/components/account-profile/account-profile.component";
import { AccountSettingComponent } from "./core/components/account-setting/account-setting.component";
import { AccountWorksComponent } from "./core/components/account-works/account-works.component";
import { ChangelogComponent } from "./core/components/changelog/changelog.component";
import { ComponentsComponent } from "./core/components/components/components.component";
import { DocumentationComponent } from "./core/components/documentation/documentation.component";
import { ForumsCommentsComponent } from "./core/components/forums-comments/forums-comments.component";
import { ForumsTopicComponent } from "./core/components/forums-topic/forums-topic.component";
import { ForumsComponent } from "./core/components/forums/forums.component";
import { HelpcenterFaqsComponent } from "./core/components/helpcenter-faqs/helpcenter-faqs.component";
import { HelpcenterGuidesComponent } from "./core/components/helpcenter-guides/helpcenter-guides.component";
import { HelpcenterOverviewComponent } from "./core/components/helpcenter-overview/helpcenter-overview.component";
import { HelpcenterSupportRequestComponent } from "./core/components/helpcenter-support-request/helpcenter-support-request.component";
import { IndexAgencyComponent } from "./core/components/index-agency/index-agency.component";
import { IndexAppsComponent } from "./core/components/index-apps/index-apps.component";
import { IndexBlogComponent } from "./core/components/index-blog/index-blog.component";
import { IndexBusinessComponent } from "./core/components/index-business/index-business.component";
import { IndexCarRidingComponent } from "./core/components/index-car-riding/index-car-riding.component";
import { IndexClassicAppComponent } from "./core/components/index-classic-app/index-classic-app.component";
import { IndexClassicSaasComponent } from "./core/components/index-classic-saas/index-classic-saas.component";
import { IndexCorporateComponent } from "./core/components/index-corporate/index-corporate.component";
import { IndexCourseComponent } from "./core/components/index-course/index-course.component";
import { IndexCoworkingComponent } from "./core/components/index-coworking/index-coworking.component";
import { IndexCryptoComponent } from "./core/components/index-crypto/index-crypto.component";
import { IndexCustomerComponent } from "./core/components/index-customer/index-customer.component";
import { IndexDigitalAgencyComponent } from "./core/components/index-digital-agency/index-digital-agency.component";
import { IndexEbookComponent } from "./core/components/index-ebook/index-ebook.component";
import { IndexEmailInboxComponent } from "./core/components/index-email-inbox/index-email-inbox.component";
import { IndexEnterpriseComponent } from "./core/components/index-enterprise/index-enterprise.component";
import { IndexEventComponent } from "./core/components/index-event/index-event.component";
import { IndexHostingComponent } from "./core/components/index-hosting/index-hosting.component";
import { IndexHotelComponent } from "./core/components/index-hotel/index-hotel.component";
import { IndexInsuranceComponent } from "./core/components/index-insurance/index-insurance.component";
import { IndexItSolutionComponent } from "./core/components/index-it-solution/index-it-solution.component";
import { IndexJobComponent } from "./core/components/index-job/index-job.component";
import { IndexLandingOneComponent } from "./core/components/index-landing-one/index-landing-one.component";
import { IndexLandingThreeComponent } from "./core/components/index-landing-three/index-landing-three.component";
import { IndexLandingTwoComponent } from "./core/components/index-landing-two/index-landing-two.component";
import { IndexMarketingComponent } from "./core/components/index-marketing/index-marketing.component";
import { IndexModernBusinessComponent } from "./core/components/index-modern-business/index-modern-business.component";
import { IndexOnepageComponent } from "./core/components/index-onepage/index-onepage.component";
import { IndexOnlineLearningComponent } from "./core/components/index-online-learning/index-online-learning.component";
import { IndexPaymentsComponent } from "./core/components/index-payments/index-payments.component";
import { IndexPersonalComponent } from "./core/components/index-personal/index-personal.component";
import { IndexPortfolioComponent } from "./core/components/index-portfolio/index-portfolio.component";
import { IndexSaasComponent } from "./core/components/index-saas/index-saas.component";
import { IndexServicesComponent } from "./core/components/index-services/index-services.component";
import { IndexShopComponent } from "./core/components/index-shop/index-shop.component";
import { IndexSingleProductComponent } from "./core/components/index-single-product/index-single-product.component";
import { IndexSocialMarketingComponent } from "./core/components/index-social-marketing/index-social-marketing.component";
import { IndexSoftwareComponent } from "./core/components/index-software/index-software.component";
import { IndexStudioComponent } from "./core/components/index-studio/index-studio.component";
import { IndexTaskManagementComponent } from "./core/components/index-task-management/index-task-management.component";
import { IndexTravelComponent } from "./core/components/index-travel/index-travel.component";
import { IndexComponent } from "./core/components/index/index.component";
import { MasterPageComponent } from "./core/components/master-page/master-page.component";
import { PageAboutusTwoComponent } from "./core/components/page-aboutus-two/page-aboutus-two.component";
import { PageAboutusComponent } from "./core/components/page-aboutus/page-aboutus.component";
import { PageBlogDetailTwoComponent } from "./core/components/page-blog-detail-two/page-blog-detail-two.component";
import { PageBlogDetailComponent } from "./core/components/page-blog-detail/page-blog-detail.component";
import { PageBlogGridComponent } from "./core/components/page-blog-grid/page-blog-grid.component";
import { PageBlogListSidebarComponent } from "./core/components/page-blog-list-sidebar/page-blog-list-sidebar.component";
import { PageBlogListComponent } from "./core/components/page-blog-list/page-blog-list.component";
import { PageBlogSidebarComponent } from "./core/components/page-blog-sidebar/page-blog-sidebar.component";
import { PageCaseDetailComponent } from "./core/components/page-case-detail/page-case-detail.component";
import { PageCasesComponent } from "./core/components/page-cases/page-cases.component";
import { PageComingsoonComponent } from "./core/components/page-comingsoon/page-comingsoon.component";
import { PageComingsoon2Component } from "./core/components/page-comingsoon2/page-comingsoon2.component";
import { PageContactDetailComponent } from "./core/components/page-contact-detail/page-contact-detail.component";
import { PageContactOneComponent } from "./core/components/page-contact-one/page-contact-one.component";
import { PageContactThreeComponent } from "./core/components/page-contact-three/page-contact-three.component";
import { PageContactTwoComponent } from "./core/components/page-contact-two/page-contact-two.component";
import { PageErrorComponent } from "./core/components/page-error/page-error.component";
import { PageHistoryComponent } from "./core/components/page-history/page-history.component";
import { PageInvoiceComponent } from "./core/components/page-invoice/page-invoice.component";
import { PageJobApplyComponent } from "./core/components/page-job-apply/page-job-apply.component";
import { PageJobCandidateComponent } from "./core/components/page-job-candidate/page-job-candidate.component";
import { PageJobCompanyComponent } from "./core/components/page-job-company/page-job-company.component";
import { PageJobDetailComponent } from "./core/components/page-job-detail/page-job-detail.component";
import { PageJobsSidebarComponent } from "./core/components/page-jobs-sidebar/page-jobs-sidebar.component";
import { PageJobsComponent } from "./core/components/page-jobs/page-jobs.component";
import { PageMaintenanceComponent } from "./core/components/page-maintenance/page-maintenance.component";
import { PagePricingComponent } from "./core/components/page-pricing/page-pricing.component";
import { PagePrivacyComponent } from "./core/components/page-privacy/page-privacy.component";
import { PageServicesComponent } from "./core/components/page-services/page-services.component";
import { PageTeamComponent } from "./core/components/page-team/page-team.component";
import { PageTermsComponent } from "./core/components/page-terms/page-terms.component";
import { PageWorkClassicComponent } from "./core/components/page-work-classic/page-work-classic.component";
import { PageWorkDetailComponent } from "./core/components/page-work-detail/page-work-detail.component";
import { PageWorkGridComponent } from "./core/components/page-work-grid/page-work-grid.component";
import { PageWorkMasonryComponent } from "./core/components/page-work-masonry/page-work-masonry.component";
import { PageWorkModernComponent } from "./core/components/page-work-modern/page-work-modern.component";
import { ShopCartComponent } from "./core/components/shop-cart/shop-cart.component";
import { ShopCheckoutsComponent } from "./core/components/shop-checkouts/shop-checkouts.component";
import { ShopMyaccountComponent } from "./core/components/shop-myaccount/shop-myaccount.component";
import { ShopProductDetailComponent } from "./core/components/shop-product-detail/shop-product-detail.component";
import { ShopProductsComponent } from "./core/components/shop-products/shop-products.component";
import { WidgetComponent } from "./core/components/widget/widget.component";
import { EmailAlertComponent } from "./email/email-alert/email-alert.component";
import { EmailConfirmationComponent } from "./email/email-confirmation/email-confirmation.component";
import { EmailInvoiceComponent } from "./email/email-invoice/email-invoice.component";
import { EmailPasswordResetComponent } from "./email/email-password-reset/email-password-reset.component";
import { SwitcherComponent } from "./shared/switcher/switcher.component";
import { HomeComponent } from "./core/components/home/home.component";
import { HomePageComponent } from "./core/components/home-page/home-page.component";
import { WlSignupComponent } from "./auth/wl-signup/wl-signup.component";
import { RefFriendComponent } from "./auth/ref-friend/ref-friend.component";
import { ConfirmComponent } from "./core/components/confirm/confirm.component";
import { MinHomeComponent } from "./core/components/min-home/min-home.component";
import { AugieFaqComponent } from "./core/components/augie-faq/augie-faq.component";
import { SignupsComponent } from "./admin/signups/signups.component";
import { AdminPageComponent } from "./admin/admin-page/admin-page.component";
import { AddSettingComponent } from "./admin/add-setting/add-setting.component";
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { AugiePrivacyPolicyComponent } from "./core/components/augie-privacy-policy/augie-privacy-policy.component";

const routes: Routes = [
  {
    path: "",
    // component: MasterPageComponent,
    component: HomePageComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "home", component: IndexComponent },
      { path: "account-messages", component: AccountMessagesComponent },
      { path: "account-members", component: AccountMembersComponent },
      { path: "account-payments", component: AccountPaymentsComponent },
      { path: "account-profile", component: AccountProfileComponent },
      { path: "account-setting", component: AccountSettingComponent },
      { path: "account-works", component: AccountWorksComponent },
      { path: "changelog", component: ChangelogComponent },
      { path: "components", component: ComponentsComponent },
      { path: "documentation", component: DocumentationComponent },
      { path: "forums", component: ForumsComponent },
      { path: "forums-comments", component: ForumsCommentsComponent },
      { path: "forums-topic", component: ForumsTopicComponent },
      { path: "helpcenter-faqs", component: HelpcenterFaqsComponent },
      { path: "helpcenter-guides", component: HelpcenterGuidesComponent },
      { path: "helpcenter-overview", component: HelpcenterOverviewComponent },
      { path: "privacy-policy", component: AugiePrivacyPolicyComponent },
      {
        path: "helpcenter-support-request",
        component: HelpcenterSupportRequestComponent,
      },
      { path: "index", component: IndexComponent },
      { path: "index-agency", component: IndexAgencyComponent },
      { path: "index-apps", component: IndexAppsComponent },
      { path: "index-blog", component: IndexBlogComponent },
      { path: "index-business", component: IndexBusinessComponent },
      { path: "index-car-riding", component: IndexCarRidingComponent },
      { path: "index-classic-app", component: IndexClassicAppComponent },
      { path: "index-classic-saas", component: IndexClassicSaasComponent },
      { path: "index-corporate", component: IndexCorporateComponent },
      { path: "index-course", component: IndexCourseComponent },
      { path: "index-coworking", component: IndexCoworkingComponent },
      { path: "index-crypto", component: IndexCryptoComponent },
      { path: "index-customer", component: IndexCustomerComponent },
      { path: "index-digital-agency", component: IndexDigitalAgencyComponent },
      { path: "index-ebook", component: IndexEbookComponent },
      { path: "index-email-inbox", component: IndexEmailInboxComponent },
      { path: "index-enterprise", component: IndexEnterpriseComponent },
      { path: "index-event", component: IndexEventComponent },
      { path: "index-hosting", component: IndexHostingComponent },
      { path: "index-hotel", component: IndexHotelComponent },
      { path: "index-insurance", component: IndexInsuranceComponent },
      { path: "index-it-solution", component: IndexItSolutionComponent },
      { path: "index-job", component: IndexJobComponent },
      { path: "index-landing-one", component: IndexLandingOneComponent },
      { path: "index-landing-three", component: IndexLandingThreeComponent },
      { path: "index-landing-two", component: IndexLandingTwoComponent },
      { path: "index-marketing", component: IndexMarketingComponent },
      {
        path: "index-modern-business",
        component: IndexModernBusinessComponent,
      },

      {
        path: "index-online-learning",
        component: IndexOnlineLearningComponent,
      },
      { path: "index-payments", component: IndexPaymentsComponent },
      { path: "index-personal", component: IndexPersonalComponent },
      { path: "index-portfolio", component: IndexPortfolioComponent },
      { path: "index-saas", component: IndexSaasComponent },
      { path: "index-services", component: IndexServicesComponent },
      { path: "index-shop", component: IndexShopComponent },
      { path: "index-single-product", component: IndexSingleProductComponent },
      {
        path: "index-social-marketing",
        component: IndexSocialMarketingComponent,
      },
      { path: "index-software", component: IndexSoftwareComponent },
      { path: "index-studio", component: IndexStudioComponent },
      {
        path: "index-task-management",
        component: IndexTaskManagementComponent,
      },
      { path: "index-travel", component: IndexTravelComponent },
      { path: "page-aboutus", component: PageAboutusComponent },
      { path: "page-aboutus-two", component: PageAboutusTwoComponent },
      { path: "page-blog-detail", component: PageBlogDetailComponent },
      { path: "page-blog-grid", component: PageBlogGridComponent },
      { path: "page-blog-list", component: PageBlogListComponent },
      {
        path: "page-blog-list-sidebar",
        component: PageBlogListSidebarComponent,
      },
      { path: "page-blog-sidebar", component: PageBlogSidebarComponent },
      { path: "page-case-detail", component: PageCaseDetailComponent },
      { path: "page-cases", component: PageCasesComponent },
      { path: "page-contact-detail", component: PageContactDetailComponent },
      { path: "page-contact-one", component: PageContactOneComponent },
      { path: "page-contact-three", component: PageContactThreeComponent },
      { path: "page-contact-two", component: PageContactTwoComponent },
      { path: "page-history", component: PageHistoryComponent },
      { path: "page-invoice", component: PageInvoiceComponent },
      { path: "page-job-apply", component: PageJobApplyComponent },
      { path: "page-job-candidate", component: PageJobCandidateComponent },
      { path: "page-job-company", component: PageJobCompanyComponent },
      { path: "page-job-detail", component: PageJobDetailComponent },
      { path: "page-jobs", component: PageJobsComponent },
      { path: "page-jobs-sidebar", component: PageJobsSidebarComponent },
      { path: "page-pricing", component: PagePricingComponent },
      { path: "page-privacy", component: PagePrivacyComponent },
      { path: "page-services", component: PageServicesComponent },
      { path: "page-team", component: PageTeamComponent },
      { path: "page-terms", component: PageTermsComponent },
      { path: "page-work-classic", component: PageWorkClassicComponent },
      { path: "page-work-detail", component: PageWorkDetailComponent },
      { path: "page-work-grid", component: PageWorkGridComponent },
      { path: "page-work-masonry", component: PageWorkMasonryComponent },
      { path: "page-work-modern", component: PageWorkModernComponent },
      { path: "shop-cart", component: ShopCartComponent },
      { path: "shop-checkouts", component: ShopCheckoutsComponent },
      { path: "shop-myaccount", component: ShopMyaccountComponent },
      { path: "shop-product-detail", component: ShopProductDetailComponent },
      { path: "shop-products", component: ShopProductsComponent },
      { path: "widget", component: WidgetComponent },
      { path: "page-blog-detail-two", component: PageBlogDetailTwoComponent },
      { path: "#", component: SwitcherComponent },
      { path: "faq", component: AugieFaqComponent },
      { path: "confirmation", component: ConfirmComponent },
      { path: "wl-signup", component: WlSignupComponent },
      { path: "signup", component: RefFriendComponent },
      { path: "contact-us", component: ContactUsComponent}
    ],
  },
  {
    path: "forms",
    component: MinHomeComponent,
    children: [
      { path: "confirmationv1", component: ConfirmComponent },
      { path: "wl-signupv2", component: WlSignupComponent },
      { path: "signupv3", component: RefFriendComponent },
      { path: "signups", component: SignupsComponent },
      { path: "add-setting", component: AddSettingComponent },
    ],
  },
  { path: "admin", component: AdminPageComponent },
  { path: "auth-login", component: AuthLoginComponent },
  { path: "auth-cover-login", component: AuthCoverLoginComponent },
  { path: "auth-cover-re-password", component: AuthCoverRePasswordComponent },
  { path: "auth-cover-signup", component: AuthCoverSignupComponent },
  { path: "auth-login-three", component: AuthLoginThreeComponent },
  { path: "auth-re-password", component: AuthRePasswordComponent },
  { path: "auth-re-password-three", component: AuthRePasswordThreeComponent },
  { path: "auth-signup", component: AuthSignupComponent },
  { path: "auth-signup-three", component: AuthSignupThreeComponent },
  { path: "index-onepage", component: IndexOnepageComponent },
  { path: "page-comingsoon", component: PageComingsoonComponent },
  { path: "page-comingsoon2", component: PageComingsoon2Component },
  { path: "page-error", component: PageErrorComponent },
  { path: "page-maintenance", component: PageMaintenanceComponent },

  { path: "email-alert", component: EmailAlertComponent },
  { path: "email-confirmation", component: EmailConfirmationComponent },
  { path: "email-invoice", component: EmailInvoiceComponent },
  { path: "email-password-reset", component: EmailPasswordResetComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
