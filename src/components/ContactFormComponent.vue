<script>
export default {
  name: 'ContactFormComponent',
  props: {},
  computed: {},
}
</script>

<template>
  <section class="contact-form-wrapper">
    <div class="contact-card">
      <header class="contact-header">
        <h2>Contact Us</h2>
        <p>
          Have a question about our cruises, ships, or services? Our team will be happy to assist
          you.
        </p>
      </header>

      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label>Your name</label>
            <input type="text" placeholder="John Doe" required />
          </div>

          <div class="form-group">
            <label>Email address</label>
            <input type="email" placeholder="john@email.com" required />
          </div>
        </div>

        <div class="form-group">
          <label>Subject</label>
          <input type="text" placeholder="Cruise booking question" />
        </div>

        <div class="form-group">
          <label>Message</label>
          <textarea rows="5" placeholder="Write your message here..." required />
        </div>

        <button class="contact-submit" type="submit">Send message</button>
      </form>
    </div>
  </section>
</template>
