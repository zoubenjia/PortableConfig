var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { g as MESSAGES } from "./sieve.9a015b84.js";
import "./vendor.c17c97a4.js";
var lang = __spreadProps(__spreadValues({}, MESSAGES), {
  e_brwsr_na: "Nie znaleziono Browser",
  e_brwsr_timeout: "Spr\xF3buj ponownie p\xF3\u017Aniej. \u017Baden zdalny browser nie jest obecnie dost\u0119pny.",
  e_err: "B\u0142\u0105d",
  e_err_add: "Nie uda\u0142o si\u0119 doda\u0107 - %1$s",
  e_err_unexpected: "Nieoczekiwany b\u0142\u0105d.",
  e_feed_in_page_na: "Nie znaleziono kana\u0142u na tej stronie.",
  e_load_source: "Nie uda\u0142o si\u0119 za\u0142adowa\u0107 \u017Ar\xF3d\u0142a.",
  e_load_stripe: "Nie uda\u0142o si\u0119 za\u0142adowa\u0107 Stripe.",
  e_pwd_change: "Nie uda\u0142o si\u0119 zmieni\u0107 has\u0142a.",
  e_pwd_new: "Nie uda\u0142o si\u0119 za\u017C\u0105da\u0107 nowego has\u0142a.",
  e_pwd_reset: "Nie uda\u0142o si\u0119 zresetowa\u0107 has\u0142a.",
  e_req: "Nie uda\u0142o si\u0119 po\u0142\u0105czy\u0107 z serwerem.",
  e_sel_0_save: "Nie znaleziono \u017Cadnego zaznaczenia do zapisu.",
  e_signin_invalid: "Logowanie nie powiod\u0142o si\u0119. Sprawd\u017A sw\xF3j login i has\u0142o, i spr\xF3buj ponownie. ",
  e_subscription_failed: "Nie uda\u0142o si\u0119 dokona\u0107 subskrypcji. ",
  e_sync_disabled: "Zaloguj si\u0119 i wtedy w\u0142\u0105cz synchronizacj\u0119.",
  e_sync_server_na: "Sprawd\u017A, czy synchronizacja jest w\u0142\u0105czona dla twojego konta.",
  e_unknown_content_type: "Nieznany typ zawarto\u015Bci: %1$s",
  e_value_exists: "Wpisana warto\u015B\u0107 ju\u017C istnieje.",
  e_value_incorrect_check: "Sprawd\u017A wpisan\u0105 warto\u015B\u0107. Jest ona niepoprawna.",
  a_action_object: "%1$s %2$s",
  a_action_reload: "Za\u0142aduj ponownie",
  a_add: "Dodaj",
  a_add_action: "Dodaj czynno\u015B\u0107",
  a_add_feed: "Dodaj kana\u0142",
  a_add_file: "Dodaj plik",
  a_add_label: "Dodaj etykiet\u0119",
  a_add_pdf: "Dodaj PDF",
  a_add_url: "Dodaj URL",
  a_apply: "Zastosuj ",
  a_cancel: "Anuluj",
  a_change_plan: "Zmie\u0144 plan",
  a_check_changes: "Sprawd\u017A zmiany",
  a_check_changes_all: "Sprawd\u017A zmiany dla wszystkich",
  a_checks_off: "OFF",
  a_checks_on: "ON",
  a_change: "Zmiana",
  a_clear: "Wyczy\u015B\u0107",
  a_close: "Zamknij",
  a_confirm: "Potwierd\u017A",
  a_confirm_plan: "Potwierd\u017A plan",
  a_del: "Usu\u0144",
  a_del_permanent: "Usu\u0144 na sta\u0142e",
  a_discard: "Anuluj",
  a_downgrade: "Zdegraduj",
  a_duplicate: "Duplikuj",
  a_edit: "Edytuj",
  a_edit_options: "Edytuj opcje",
  a_edit_rules: "Edytuj warunki",
  a_expand: "Poszerz",
  a_get_set_go: "Zrozumia\u0142em \u2014 rozpocznij",
  a_go_to_watchlist: "Przejd\u017A do listy obserwowanych",
  a_hide_actions: "Ukryj czynno\u015Bci",
  a_later: "P\xF3\u017Aniej",
  a_mark_read: "Oznacz jako przeczytane",
  a_monitor_feed: "Monitoruj kana\u0142",
  a_monitor_page: "Monitoruj ca\u0142\u0105 stron\u0119",
  a_monitor_page_elements: "Zaznacz cz\u0119\u015Bci strony",
  a_move_to_trash: "Przenie\u015B do \u015Bmieci",
  a_narrow_sel: "Zaw\u0119\u017A poszerzone zaznaczenie",
  a_next: "Dalej",
  a_open_selector: "Otw\xF3rz selektor",
  a_open_x_selector: "Otw\xF3rz selektor %s",
  a_open_unread_in_tab: "Otw\xF3rz nieprzeczytan\u0105 zak\u0142adk\u0119",
  a_play: "Odtw\xF3rz",
  a_register: "Stw\xF3rz konto",
  a_rename: "Zmie\u0144 nazw\u0119",
  a_resend_verification_msg: "Wy\u015Blij ponownie wiadomo\u015B\u0107 weryfikacyjn\u0105",
  a_restore: "Przywr\xF3\u0107",
  a_save: "Zapisz",
  a_save_selections: "Zapisz zaznaczenie",
  a_select: "Zaznacz",
  a_select_elements: "Zaznacz elementy",
  a_select_properties: "Wybierz w\u0142a\u015Bciwo\u015Bci",
  a_select_device: "Zaznacz urz\u0105dzenie do wykorzystania",
  a_show_actions: "Poka\u017C czynno\u015Bci",
  a_signin: "Zaloguj si\u0119",
  a_subscribe: "Subskrybuj",
  a_sieve_new: "Dodaj stron\u0119 internetow\u0105",
  a_static_load: "Wymu\u015B sprawdzanie w tle (dynamiczna zawarto\u015B\u0107 nie za\u0142aduje si\u0119)",
  a_toggle_changes: "Poka\u017C/Ukryj zmiany",
  a_verify: "Weryfikuj",
  a_window_close: "Zamknij okno",
  a_make_primary: "Uczy\u0144 podstawow\u0105",
  h_brwsr_closed: "Zdalny browser przesta\u0142 dzia\u0142a\u0107. Uruchom now\u0105 przegl\u0105dark\u0119. Przepraszamy za niedogodno\u015Bci.",
  h_brwsr_disconnect: "Przerwano po\u0142\u0105czenie ze zdaln\u0105 przegl\u0105dark\u0105. Uruchom now\u0105 przegl\u0105dark\u0119. Przepraszamy za niedogodno\u015Bci.",
  h_config_show: "Poka\u017C config",
  h_css_selelctor: "Selektor CSS do zaznaczania element\xF3w",
  h_del_action: "Usu\u0144 czynno\u015B\u0107",
  h_desc: "Napisz opis obja\u015Bniaj\u0105cy cel tego wpisu.",
  h_email_addr: "Adres e-mail, np. name@example.com",
  h_js: "JavaScript, aby dopasowa\u0107 zaznaczone elementy. Przywr\xF3\u0107 pasuj\u0105ce elementy synchronicznie lub wykonaj asynchroniczne zadanie i u\u017Cyj sendResponse(err, elements) callback, aby wr\xF3ci\u0107 do dopasowanych element\xF3w po zako\u0144czeniu zadania.",
  h_opening_selector_in_new_tab: "Otwieranie nowej zak\u0142adki, aby zaznaczy\u0107 zawarto\u015B\u0107...",
  h_opened_selector_in_tab: "Otwarto now\u0105 zak\u0142adk\u0119, aby zaznacza\u0107 zawarto\u015B\u0107 \u017Ar\xF3d\u0142ow\u0105.",
  h_phone: "# mi\u0119dzynarodowy format: +19999999999",
  h_regexp_filter: "Regular expression do filtrowania zawarto\u015Bci tekstu",
  h_schedule_interval: "Ustaw interwa\u0142 w jakim sprawdzane b\u0119d\u0105 zmiany.",
  h_selector_edit: "Zaznacz zawarto\u015B\u0107 ze strony.",
  h_sieve_actions: "Czynno\u015Bci s\u0105 podejmowane, gdy zawarto\u015B\u0107 \u017Ar\xF3d\u0142owa zmienia si\u0119. Kilka czynno\u015Bci mo\u017Ce by\u0107 podj\u0119te r\xF3wnocze\u015Bnie.",
  h_sieve_device: "Zaznacz urz\u0105dzenie, na kt\xF3rym dzia\u0142a ten monitor. Inne urz\u0105dzenia pojawi\u0105 si\u0119 na li\u015Bcie po synchronizacji wszystkich urz\u0105dze\u0144. Nazwa urz\u0105dzenia z sufiksem (to urz\u0105dzenie) jest nazw\u0105 obecnego urz\u0105dzenia Watchlisty.",
  h_sieve_empty: "Brak tekstu w zaznaczeniu! Je\u015Bli nie pasuje on do tekstu przy nast\u0119pnym sprawdzaniu, spr\xF3buj zmieni\u0107 zaznaczenie. Sprawd\u017A wiadomo\u015Bci w rejestrze aktualizacji.",
  h_sieve_name: "Kr\xF3tka nazwa w celu identyfikacji tego monitora.",
  h_sieve_new: "Podgl\u0105d b\u0119dzie dost\u0119pny wkr\xF3tce po uruchomieniu tego zadania.",
  h_sieve_no_config: "\u017Badne \u017Ar\xF3d\u0142o nie zosta\u0142o zaznaczone. Edytuj opcje, aby zaznaczy\u0107 zawarto\u015B\u0107 ze strony internetowej.",
  h_sieve_rules: "Warunki mog\u0105 zosta\u0107 u\u017Cyte, aby podj\u0105\u0107 czynno\u015Bci tylko, gdy s\u0105 one prawdziwe. Gdy nie ma \u017Cadnych warunk\xF3w, czynno\u015Bci podejmowane s\u0105 przy jakiejkolwiek zmianie. We wszystkich warunki poza regexp nie ma znaczenia wielko\u015B\u0107 liter.",
  h_sieve_source: "\u0179r\xF3d\u0142o jest u\u017Cywane do uzyskiwania tekstu i danych do monitorowania.",
  h_tpl_desc_info: "Opis template. Dodaj wszelkie informacji przydatne u\u017Cytkownikom i opisz, co wyj\u0105tkowego jest w tym \u201Etemplate\u201D.",
  h_tpl_desc_name: "Kr\xF3tkie imi\u0119 opisuj\u0105ce, co jest obecnie monitorowane np. \u201ECena i akcje\u201D. Nie wpisuj czasownik\xF3w jak \u201Emonitorowa\u0107\u201D lub \u201E\u015Bledzi\u0107 zmiany\u201D czy nazwy strony.",
  h_tpl_desc_url: "URL strony domowej tej witryny.",
  h_tpl_config: "Zdefiniuj zaznaczenia do monitorowania na stronie internetowej, u\u017Cywaj\u0105c tego wzoru. Je\u015Bli to konieczne, odnie\u015B si\u0119 do parametru przez jego \u201E{{name}}\u201D.",
  h_tpl_params: "Parametry umo\u017Cliwiaj\u0105 u\u017Cywanie \u201Etemplate\u201D, aby stworzy\u0107 wiele monitor\xF3w za pomoc\u0105 licznych warto\u015Bci wej\u015Bciowych. Warto\u015Bci mog\u0105 zosta\u0107 pobrane z referencyjnego URL lub by\u0107 podane przez u\u017Cytkownika.",
  h_tpl_url: "\u201Etemplate\u201D u\u017Cywany do stworzenia URL monitora. Odnie\u015B si\u0119 do parametru przez jego \u201E{{name}}\u201D. Je\u015Bli istnieje tylko jeden mo\u017Cliwy URL, nie u\u017Cywaj parametru.",
  h_tpl_url_pattern: "Wz\xF3r \u201Eregular expression\u201D, aby sprawdzi\u0107, czy ten \u201Etemplate\u201D mo\u017Ce by\u0107 u\u017Cyty na stronie internetowej. Dobrym pomys\u0142em jest przechwytywanie grup mog\u0105cych by\u0107 nazwami lub identyfikatorami. Te grupy mog\u0119 p\xF3\u017Aniej zosta\u0107 przyporz\u0105dkowane do parametr\xF3w. Na przyk\u0142ad amazon\\.com\\/(.*\\/)*dp\\/(w+) mo\u017Ce zosta\u0107 u\u017Cyte dla wszystkich produkt\xF3w na amazon.com, gdy\u017C przechwytuje identyfikatory produkt\xF3w. Wyra\u017Cenia regularne mog\u0105 by\u0107 przetestowane na regex101.com.",
  h_tpl_url_ref: "URL strony u\u017Cytej do stworzenia i przetestowania nast\u0119puj\u0105cego \u201Eregular expression\u201D.",
  h_try_later: "Spr\xF3buj ponownie p\xF3\u017Aniej.",
  h_xpath: "Wyra\u017Cenie XPath, aby zaznaczy\u0107 elementy",
  l_welcome: "Witamy",
  l_account: "Konto",
  l_account_credit: "\u015Arodki na koncie",
  l_actions: "Czynno\u015Bci",
  l_active: "Aktywne",
  l_action_email: "Odbierz poczt\u0119 e-mail",
  l_action_local_audio: "Odtw\xF3rz klip audio (dla lokalnego monitora)",
  l_action_local_popup: "Poka\u017C wyskakuj\u0105ce powiadomienia (dla lokalnego monitora)",
  l_action_macro: "Uruchom Macro",
  l_action_none: "Nieznany rodzaj akcji",
  l_action_push: "Otrzymuj powiadomienia push na telefon",
  l_action_sms: "Otrzymuj wiadomo\u015Bci SMS",
  l_action_webhook: "Po\u0142\u0105cz si\u0119 z Webhookiem",
  l_added_text: "Dodaj tekst",
  l_advanced: "Zaawansowane",
  l_all: "Wszystko",
  l_any: "Jakiekolwiek",
  l_apps: "Aplikacje",
  l_asian_koel: "Asian Koel",
  l_available: "Dost\u0119pne",
  l_available_na: "Nie dost\u0119pne!",
  l_brwsr: "Wyszukiwarka",
  l_bell_strike: "Bell Strike",
  l_changed_on: "Ostatnio zmieniono",
  l_check_log: "Zaktualizuj dziennik",
  l_conditions: "Warunki",
  l_connect: "Po\u0142\u0105cz",
  l_credit: "\u015Arodki",
  l_css_selector: "CSS Selector",
  l_device: "Urz\u0105dzenie",
  l_device_this: "To urz\u0105dzenie",
  l_devices: "Urz\u0105dzenia",
  l_devices_all: "Wszystkie urz\u0105dzenia",
  l_data: "Dane",
  l_desc: "Opis",
  l_developers: "Developerzy",
  l_device_filter: "Poka\u017C urz\u0105dzenia",
  l_done: "Zrobione",
  l_ding_dong: "Ding Dong",
  l_el_selected: "Zaznaczone",
  l_el_deselected: "Odznaczone",
  l_email: "E-mail",
  l_emails_phones: "E-maile i telefony",
  l_error: "B\u0142\u0105d",
  l_explore: "Eksploruj",
  l_feed: "Kana\u0142",
  l_field: "Pole",
  l_file: "Plik",
  l_flags: "Flags",
  l_fullname: "Pe\u0142ne imi\u0119",
  l_general: "Og\xF3lne",
  l_get_access: "Uzyskaj wczesny dost\u0119p",
  l_get_started: "Zacznij",
  l_has: "ma",
  l_has_not: "nie ma",
  l_has_num_gt: "ma numer wi\u0119kszy ni\u017C (>)",
  l_has_num_lt: "ma numer mniejszy ni\u017C (<)",
  l_has_num_decr_min: "ma numer, kt\xF3ry zmniejszy\u0142 si\u0119 o wi\u0119cej ni\u017C (-\u0394 >)",
  l_has_num_incr_min: "ma numer, kt\xF3ry zwi\u0119kszy\u0142 si\u0119 o wi\u0119cej ni\u017C (+\u0394 >)",
  l_header: "Nag\u0142\xF3wek",
  l_headers: "Nag\u0142\xF3wki",
  l_help: "Pomoc",
  l_help_support: "Pomoc i wsparcie",
  l_js: "JavaScript",
  l_label: "Etykieta",
  l_learn_more: "Dowiedz si\u0119 wi\u0119cej",
  l_loading: "\u0141adowanie",
  l_macro: "Macro",
  l_match_regex: "pasuje do regular expression",
  l_month: "miesi\u0105c",
  l_name: "Imi\u0119",
  l_name_or_email: "Nazwa u\u017Cytkownika lub e-mail",
  l_never: "Nigdy",
  l_none: "\u017Badne",
  l_not_empty: "nie jest puste",
  l_num: "Numer",
  l_options: "Opcje",
  l_opt_force_bg: "T\u0142o (zawarto\u015B\u0107 dynamiczna nie za\u0142aduje si\u0119)",
  l_opt_bgtab: "Karta",
  l_opt_bgwindow: "Okno",
  l_page_size: "Rozmiar strony",
  l_password: "Has\u0142o",
  l_pdf: "PDF (beta)",
  l_phone: "Numer telefonu",
  l_preview: "Podgl\u0105d",
  l_pricing: "Ceny",
  l_prompt: "Wpis",
  l_read: "Czytaj",
  l_referral: "Polecony",
  l_regexp: "Regular expression",
  l_regexp_filter: "Filtr \u201ERegular expression\u201D",
  l_reset_sel: "Resetuj zaznaczenie",
  l_rule: "Warunek",
  l_rule_group: "Z\u0142o\u017Cony warunek",
  l_rule_true_if_matches_x: "True, je\u015Bli pasuje",
  l_saving: "Zapisywanie...",
  l_schedule: "Rozk\u0142ad",
  l_schedule_live: "Live",
  l_search_input_label: "Wpisz tutaj URL strony",
  l_selector: "Selector",
  l_select_el: "Zaznacz elementy",
  l_selection_config: "Zaznaczenie Config",
  l_settings: "Ustawienia",
  l_signed_in_as: "Zalogowany jako %s",
  l_sieve_tpl_list: "Templates (beta)",
  l_sort_by: "Sortuj wed\u0142ug",
  l_source: "\u0179r\xF3d\u0142o",
  l_sources: "\u0179r\xF3d\u0142a",
  l_subscription: "Subskrypcja",
  l_sync: "Synchronizacja",
  l_syncing: "Synchronizacja danych...",
  l_syncing_wait: "Synchronizacja danych. Synchronizowanie licznych zmian mo\u017Ce chwil\u0119 potrwa\u0107!",
  l_text: "Tekst",
  l_text_filter: "Filtr tekstu",
  l_time_changed_on: "Czas zmieniono",
  l_tone: "Ton",
  l_tos: "Warunki \u015Bwiadczenia us\u0142ug",
  l_tpl: "Template",
  l_tpl_desc_name: "Nazwa",
  l_tpl_desc_url: "Strona domowa",
  l_tpl_desc_info: "Opis",
  l_tpl_config: "Zaznaczenie Config",
  l_tpl_params: "Parametry",
  l_tpl_uri: "URL",
  l_trash: "\u015Amieci",
  l_unread: "Nieodczytane",
  l_unsaved: "Niezapisane",
  l_untitled: "Niezatytu\u0142owane",
  l_unverified: "Niezweryfikowane",
  l_url: "URL",
  l_uri_match_group_param_map: "Mapa parametr\xF3w",
  l_uri_pattern: "Wz\xF3r dopasowania URL",
  l_uri_ref: "Testuj URL",
  l_usage: "U\u017Cycie",
  l_usage_stats: "Statystyki",
  l_username: "Nazwa u\u017Cytkownika",
  l_value: "Warto\u015B\u0107",
  l_verification_code: "Kod weryfikacyjny",
  l_verification_req: "Weryfikacja jest wymagana",
  l_visual_selector: "Visual Selector",
  l_vs_bookmarklet: "Visual Selector Bookmarklet",
  l_waiting: "Oczekiwanie",
  l_watchlist: "Watchlist",
  l_webpage: "Strona internetowa",
  l_x_of_following_rules: "nast\u0119puj\u0105cych warunk\xF3w",
  l_xml: "XML (beta)",
  l_json: "JSON (beta)",
  l_xpath: "XPath",
  l_year: "rok",
  m_1_day: "1 dzie\u0144",
  m_n_day: "%d dni",
  m_1_hour: "1 godzina",
  m_n_hour: "%d godziny",
  m_1_minute: "1 minuta",
  m_n_minute: "%d minuty",
  m_1_second: "1 sekunda",
  m_n_second: "%d sekundy",
  m_account_credit: "%1$d USD zostanie przyznanych twojemu kontu.",
  m_account_credit_minus: "%1$d USD zostanie odj\u0119te od stanu twojego konta.",
  m_action_can_add_only_one: "Czynno\u015B\u0107 ju\u017C dodana. Nie mo\u017Cna doda\u0107 kolejnej.",
  m_autohide_popup: "Automatycznie ukryj wyskakuj\u0105ce powiadomienie po",
  m_brwsr_data_discard: "Uwaga: Dane przegl\u0105darki zostan\u0105 usuni\u0119te po zamkni\u0119ciu zdalnej przegl\u0105darki.",
  m_check_local_only: "Tylko lokalne monitory sprawdzane s\u0105 pod wzgl\u0119dem zmian na tym urz\u0105dzeniu.",
  m_coming_soon: "Wkr\xF3tce",
  m_confirm_plan_change: "Potwierd\u017A, \u017Ce chcia\u0142by\u015B zmieni\u0107 plan.",
  m_del_item: "Przeniesiono jeden przedmiot do kosza.",
  m_del_items: "Przeniesiono %1$s przedmiot\xF3w do kosza.",
  m_deleted_action: "Usuni\u0119ta czynno\u015B\u0107",
  m_dont_show: "Nie pokazuj ponownie",
  m_enter_valid_url: "Wpisz wa\u017Cny URL.",
  m_enter_feed_url: "Wpisz URL kana\u0142u lub strony zawieraj\u0105cych ten kana\u0142",
  m_enter_pdf_url: "Wpisz URL pliku PDF",
  m_enter_xml_url: "Wpisz URL pliku XML",
  m_feed_finding: "Szukanie kana\u0142\xF3w na stronie...",
  m_free_trial_end: "Twoja darmowa wersja pr\xF3bna nied\u0142ugo si\u0119 zako\u0144czony.",
  m_free_trial_ending_soon: "Twoja darmowa wersja pr\xF3bna zako\u0144czy\u0142a si\u0119. Uaktualnij j\u0105 teraz lub przejd\u017A na darmowy plan.",
  m_free_trial_till: "Twoja darmowa wersja pr\xF3bna jest wa\u017Cna do %1$s.",
  m_firefox_only: "Tylko dla Firefoxa",
  m_initial_charge_amount: "Wst\u0119pnie b\u0119dzie ci\u0119 to kosztowa\u0107 %1$d USD za plan %2$s do %3$s.",
  m_load_page_options: "Za\u0142aduj strony, kt\xF3re nie mog\u0105 by\u0107 za\u0142adowane w tle w",
  m_log_na: "Rejestr jest pusty. Rejestry pojawiaj\u0105 si\u0119 po tym jak \u017Ar\xF3d\u0142o jest sprawdzone pod wzgl\u0119dem aktualizacji.",
  m_login_success: "Logowanie zako\u0144czone pomy\u015Blnie",
  m_max_workers: "Maksymalna liczba pracownik\xF3w jednocze\u015Bnie",
  m_never: "Nigdy",
  m_popup_empty: 'Niedawne aktualizacje z twojej \u201EWatchlisty" pojawiaj\u0105 si\u0119 tutaj. Zacznij od monitorowania kilku stron internetowych.',
  m_premium_only: "Tylko dla u\u017Cytkownik\xF3w premium",
  m_pwd_reset_req_sent: "Poproszono o reset has\u0142a. Wkr\xF3tce powiniene\u015B otrzyma\u0107 e-mail z instrukcjami.",
  m_referral_info: "Wy\u015Blij swoim znajomym $10 w jednostce Distill. Zyskaj $25 za ka\u017Cd\u0105 osob\u0119, kt\xF3ra si\u0119 zapisze i przejdzie na wy\u017Csz\u0105 wersj\u0119 konta.",
  m_referral_tweet: "Tweetuj, aby zaprosi\u0107 znajomych ",
  m_referral_tweet_msg: "Distill monitoruje sie\u0107 i natychmiast wysy\u0142a powiadomienia. Do\u0142\u0105cz teraz i uzyskaj darmowe $10!",
  m_regex_group_na: "Nie ma \u017Cadnej grupy we wzorze url.",
  m_restored_from_trash: "Przywr\xF3cono monitory ze \u015Amieci.",
  m_save_selections_none: "Brak zaznaczenia do zapisu.",
  m_saved: "Zapisano",
  m_saved_action: "Zapisano czynno\u015Bci",
  m_saved_schedule: "Zapisano zmiany w rozk\u0142adzie",
  m_selection_discarded: "Zaznaczenie anulowane",
  m_selection_saved: "Zaznaczenie uko\u0144czone",
  m_sent_verify: "Wys\u0142ano pro\u015Bb\u0119 o weryfikacj\u0119",
  m_sieve_data_na: "Nie znaleziono starszej historii",
  m_sign_in_req: "Zaloguj si\u0119, aby zobaczy\u0107 szczeg\xF3\u0142y.",
  m_start_end_of_total: "%1$s-%2$s z %3$s",
  m_subscription_cancelled: "Anulowano subskrypcj\u0119.",
  m_sync_monitors: "Synchronizuj monitory mi\u0119dzy urz\u0105dzeniami.",
  m_sync_to_save: "Synchronizuj do chmury, aby zapisa\u0107 zmiany lokalne.",
  m_try_later: "Spr\xF3buj ponownie p\xF3\u017Aniej.",
  m_unique_referral_link: "Tw\xF3j w\u0142asny link polecaj\u0105cy",
  m_verification_code: "Otrzymasz wiadomo\u015B\u0107 z kodem na tw\xF3j %1$s. Wpisz ten kod poni\u017Cej, aby go zweryfikowa\u0107.",
  m_vs_bookmarklet: "Przeci\u0105gnij mnie do paska zak\u0142adek. Potem otw\xF3rz stron\u0119 internetow\u0105 i kliknij \u201Ebookmarklet\u201D, aby zaznaczy\u0107 jego cz\u0119\u015Bci i doda\u0107 do \u201EDistill\u201D.",
  m_vs_help: "Zaznacz \u201Eelements\u201D na stronie do obserwowania zmian. Mo\u017Cna zaznaczy\u0107 wiele \u201Eelements\u201D. Zignoruj element potomny klikaj\u0105c na ten element w\u015Br\xF3d istniej\u0105cego zaznaczenia. Obserwowany element oznaczony jest czarn\u0105 ramk\u0105, a ignorowany element czerwon\u0105.",
  m_vs_intro_main: "Visual Selector uruchamia przegl\u0105dark\u0119 w chmurze dla zdalnej interakcji.",
  m_vs_intro_msg1: "Przejd\u017A do strony internetowej, u\u017Cywaj\u0105c urlbar.",
  m_vs_intro_msg2: "U\u017Cyj narz\u0119dzi zaznaczania, aby zaznaczy\u0107 i zapisa\u0107 zawarto\u015B\u0107 z otwartej strony internetowej.",
  m_vs_page_loading_try_later: "Ups! Ta strona nie sko\u0144czy\u0142a si\u0119 \u0142adowa\u0107! Spr\xF3buj ponownie p\xF3\u017Aniej, gdy strona si\u0119 za\u0142aduje.",
  m_vs_sel_preview: "Zaznacz \u201Eelements\u201D, aby zobaczy\u0107 podgl\u0105d zaznaczonego tekstu.",
  m_xframe_notice: "Ta strona nie mo\u017Ce zosta\u0107 za\u0142adowana w tle na tym urz\u0105dzeniu. Zostanie sprawdzona pod wzgl\u0119dem zmian w nowej zak\u0142adce.",
  l_add_monitor: "Dodaj Monitor",
  t_updates: "Aktualizacje",
  m_enterprise_only_feature: "Ta funkcja jest obecnie dost\u0119pna tylko dla u\u017Cytkownik\xF3w korporacyjnych.",
  m_started_check_for_changes: "Rozpocz\u0119to sprawdzanie zmian",
  m_check_for_changes_failed: "Nie mo\u017Cna sprawdzi\u0107 zmian",
  rule_comma_dot: "Format 1: 4,294,967,295.000",
  rule_dot_comma: "Format 2: 4.294.967.295,000",
  rule_space_comma: "Format 3: 4 294 967 295,000",
  l_num_format: "Format liczbowy",
  title_num_format: "Format liczbowy u\u017Cywany do analizowania liczb z tekstu.",
  title_format_option_comma_dot: ", jako separator tysi\u0119cy i . jako separator dziesi\u0119tny",
  title_format_option_dot_comma: ". jako separator tysi\u0119cy i jako separator dziesi\u0119tny",
  title_format_option_space_comma: "' ' jako separator tysi\u0119cy i jako separator dziesi\u0119tny",
  err_select_datasource: "Wybierz \u017Ar\xF3d\u0142o danych.",
  err_invalid_datasource_selected: "Wybrane \u017Ar\xF3d\u0142o danych nie jest ju\u017C dost\u0119pne, wybierz jedno z dost\u0119pnych \u017Ar\xF3de\u0142 danych.",
  m_no_datasource_available: "Dla tej witryny nie s\u0105 dost\u0119pne \u017Cadne \u017Ar\xF3d\u0142a danych.",
  m_err_datasource: "B\u0142\u0105d podczas wykonywania \u017Ar\xF3d\u0142a danych.",
  m_datasources_info_title: "Wszystko o \u017Ar\xF3d\u0142ach danych",
  m_datasources_info_1: "Oferuje widok oparty na danych zamiast widoku strony internetowej, kt\xF3ry wyeliminuje fa\u0142szywe powiadomienia.",
  m_datasources_info_2: "W przeciwie\u0144stwie do selektor\xF3w wizualnych, Distill.io nimi zarz\u0105dza, dzi\u0119ki czemu mo\u017Cemy by\u0107 pewni, \u017Ce dane s\u0105 dok\u0142adnie monitorowane.",
  m_datasources_info_3: "I nie musisz si\u0119 martwi\u0107 o konfiguracje selektor\xF3w, op\xF3\u017Anienia czy uwierzytelnianie.",
  a_show_more_info: "Poka\u017C wi\u0119cej informacji",
  m_datasource_request: "Daj nam zna\u0107, czy powinni\u015Bmy r\xF3wnie\u017C utworzy\u0107 \u017Ar\xF3d\u0142o danych dla danego adresu URL",
  m_datasource_request_description: "Wi\u0119cej informacji, np. pola do uwzgl\u0119dnienia",
  m_datasource_request_success: "\u017B\u0105danie \u017Ar\xF3d\u0142a danych zosta\u0142o przes\u0142ane pomy\u015Blnie",
  err_datasource_request_submit: "B\u0142\u0105d podczas przesy\u0142ania \u017C\u0105dania \u017Ar\xF3d\u0142a danych",
  a_submit: "Sk\u0142ada\u0107"
});
export { lang as default };
