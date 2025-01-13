const { defineStore } = require("pinia");
const { computed, ref } = require("vue");

const windlestone_user = "windlestone_user";
const windlestone_Token = "windlestone_Token";

export const useAuthStore = defineStore("auth", () => {
  const _user = ref(null);
  const _token = ref(null);

  const setUserToken = (user, token) => {
    _user.value = user;
    _token.value = token;
    localStorage.setItem(windlestone_user, JSON.stringify(user));
    localStorage.setItem(windlestone_Token, token);
  };

  let user = computed(() => {
    if (!_user.value) {
      _user.value = JSON.parse(localStorage.getItem(windlestone_user));
    }
    return _user.value;
  });

  let token = computed(() => {
    if (!_token.value) {
      _token.value = localStorage.getItem(windlestone_Token);
    }
    return _token.value;
  });

  return {
    setUserToken,
    user,
    token,
  };
});
