export default {
  has_role(user, roles) {
    return roles.some((r) => user.roles && user.roles.indexOf(r) !== -1);
  },
  can_upload(user) {
    return (
      this.can_link(user) ||
      this.can_detail(user) ||
      this.has_role(user, ['uploader'])
    );
  },
  can_link(user) {
    return this.can_detail(user) || this.has_role(user, ['linker']);
  },
  can_detail(user) {
    return this.can_appraise(user) || this.has_role(user, ['detailer']);
  },
  can_appraise(user) {
    return (
      this.can_filter(user) ||
      this.has_role(user, ['junior_appraiser', 'senior_appraiser'])
    );
  },
  can_appraise_junior(user) {
    return this.can_filter(user) || this.has_role(user, ['junior_appraiser']);
  },
  can_appraise_senior(user) {
    return this.can_filter(user) || this.has_role(user, ['senior_appraiser']);
  },
  can_filter(user) {
    return (
      this.can_prioritize(user) ||
      this.has_role(user, ['junior_filterer', 'senior_filterer'])
    );
  },
  can_filter_junior(user) {
    return (
      this.can_prioritize(user) || this.has_role(user, ['junior_filterer'])
    );
  },
  can_filter_senior(user) {
    return (
      this.can_prioritize(user) || this.has_role(user, ['senior_filterer'])
    );
  },
  can_prioritize(user) {
    return this.can_admin(user) || this.has_role(user, ['prioritizer']);
  },
  can_translate(user) {
    return this.can_admin(user) || this.has_role(user, ['translator']);
  },
  can_admin(user) {
    return this.has_role(user, ['administrator']);
  },
};
