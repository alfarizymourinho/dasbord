import { createStore } from "vuex";
import auth from "./modules/auth";

export default createStore({
    state: {
        hideConfigButton: false,
        isPinned: true,
        showConfig: false,
        sidebarType: "bg-white",
        isRTL: false,
        mcolor: "",
        darkMode: false,
        isNavFixed: false,
        isAbsolute: false,
        showNavs: true,
        showSidenav: true,
        showNavbar: true,
        showFooter: true,
        showMain: true,
        layout: "default"
    },
    mutations: {
        toggleConfigurator(state) {
            state.showConfig = !state.showConfig;
        },
        navbarMinimize(state) {
            // Menggunakan state untuk mengakses nilai dari state Vuex
            if (state.showSidenav) {
                state.showSidenav = false;
                state.isPinned = false;
            } else {
                state.showSidenav = true;
                state.isPinned = true;
            }
        },
        // Menyimpan tipe sidebar ke dalam state
        setSidebarType(state, payload) {
            state.sidebarType = payload;
        },
        // Mutasi untuk menetapkan status navbar yang difiksasi atau tidak
        toggleNavbarFixed(state) {
            state.isNavFixed = !state.isNavFixed;
        }
    },
    actions: {
        // Aksi untuk menetapkan tipe sidebar
        setSidebarType({ commit }, payload) {
            commit("setSidebarType", payload);
        },
        // Aksi untuk menetapkan status navbar yang difiksasi atau tidak
        toggleNavbarFixed({ commit }) {
            commit("toggleNavbarFixed");
        }
    },
    modules: {
        auth,
        // Tambahkan modul lain jika diperlukan
    },
    getters: {}
});
