import { getUsuarios, setLogueadoFirebase } from "./firebase.js";

const usuarios = await getUsuarios()

export async function listadoDeDocumentosYDatos() {
  const r = [];  
  for (let i of usuarios) {
    r.push(i);
  }
  return new Promise(function (resolve, reject) {
    resolve(r);
  });
}

export async function setLogueado(data, id) {
  await setLogueadoFirebase(data, id)
}


const enlaces = [
  ["BGU FISICA1", "1bUKPfBPvjsdCgcC32ZXCiAS84n00sp-L", "226", "37"],
  ["BGU FISICA2", "19uVJekpmZEsM1Lof7bYZi3a64jvUMwjw", "242", "32"],
  ["BGU FISICA3", "1iRlQaoWXYJDmBRo4qWFXZMotoPvYEac8", "226", "22"],
  ["BGU HISTORIA1", "1wRdW4eQJaV9ZEd7gNvJmOiSbutAUpgni", "209", "17"],
  ["BGU HISTORIA2", "1QwNzvg82XhBG-eDBDPE1CLeq0uKSxWcn", "189", "25"],
  ["BGU HISTORIA3", "1saNqaNvOXj9ZmYL864jsK6pcveAIrl1H", "191", "18"],
  ["BGU INGLES A1", "1xj342XsB3jKfTj9-89bnCFdFq7uMDTVi", "177", "40"],
  ["BGU INGLES A2", "1gWg8iQ5u6oyx2B6zZe9HmR77EeY2aT3C", "177", "46"],
  ["BGU INGLES B1", "1vHETGv9qtUxU0aGvBLt0ot8p1v5_2fwA", "177", "42"],
  ["BGU INGLES B2", "1QQDbYehC4s16cXwC76lxGMEE9vATO1UL", "174", "19"],
  ["BGU LECTURA1", "1MfF7RtC6BOW7fA5yI2tEEmaCbNDYHTvB", "242", "105"],
  ["BGU LECTURA2", "1UPG5rzUEn6DPGiABPGvxn_0zznbfOCvP", "242", "93"],
  ["BGU LECTURA3", "1hmEiEYMI1HmVUo4XulSzbzAYIWt8oi09", "160", "56"],
  ["BGU MATEMATICAS1", "1C2QGRFosddQjD8V3r6zoI_Rnrgt-MLAM", "290", "40"],
  ["BGU MATEMATICAS2", "15RJfcqvqqxnlCUPef6jzXOUMsGUNT3JU", "258", "22"],
  ["BGU MATEMATICAS3", "18CGAhmqjHVu0qay90y57YRFDTnCalhft", "242", "20"],
  ["BGU NATURALES1", "1R-PVDo0GZCSUBfbagAsysLsaIEiheZPz", "242", "92"],
  ["BGU NATURALES2", "1xRSwL36lpp8lLWQf9HMOmoLUJXlaIn5j", "226", "44"],
  ["BGU NATURALES3", "1_Q31MF2qOMQj1wfLPz7FsO1SW7kf5ThE", "210", "30"],
  ["BGU QUIMICA1", "1CMFFSVE5HCp6OF5OBQaUAvZibnak8oUF", "178", "33"],
  ["BGU QUIMICA2", "1RzczrrAv9ntzG3N_dZnAh4ApyqzWs3o0", "210", "32"],
  ["D11 INGLES", "1Dd0G7a1VryS-TV9ewic641cOE2_MzKXH", "5", "4"],
  ["D11 LECTURA", "1fnTSIZ23Nv2ovHzbXLLvYIkj3Ge6HSUa", "9", "14"],
  ["D11 MATEMATICAS", "1dI4vDwTNrBb5jIY7e6FLywIwp_zUgSY0", "8", "9"],
  ["D11 NATURALES", "1619zUKJ9SH0-stksjkHqVtnXiNS1Nixr", "5", "7"],
  ["D11 QUIMICA", "1TKiVQ1pJtroaD_LfoQCdo8ZZwSUafGcx", "4", "5"],
  ["D11 SOCIALES1", "1l5TuwntRGZLYueAwokmzo_tw67XlYrHN", "4", "8"],
  ["D11 SOCIALES2", "1l6c9Vl4Lp0PP4XSf587phAqKXv2I789d", "6", "14"],
  [
    "DEMOCRACIA EN MOVIMIENTO",
    "1SxQ7XCVF3MWoFobW3J6CIMErT5bbxX1p",
    "477",
    "24",
  ],
  ["DEMRE 2019 BIOLOGIA", "1p3-iG8gBVx_KjFIWha_go3C9h4m627Dc", "160", "23"],
  ["DEMRE 2019 FISICA", "1TDNoKoVk0hDfexTwOBjYLPlgVBp4Ua5T", "155", "22"],
  ["DEMRE 2019 LECTURA", "1aOjsPuEN-4R11zpvbhD3Wm0ilf3tbDyl", "134", "2"],
  ["DEMRE 2019 MATEMATICAS", "1hqb3uqktTzMZetcqaVdaxc7fmcwUxC5z", "171", "2"],
  ["DEMRE 2019 QUIMICA", "1MGQgJjN7vaNTdje5UajkIRrGCdP5WKGu", "161", "22"],
  ["DEMRE 2019 SOCIALES", "1Qiep04rMpgUaTDA9YFINatLsDEIWy4gk", "126", "1"],
  ["DEMRE 2019 TECNICO", "1bqrjZJVeC6YyMJwNBjvfq_nS1w6WHasq", "152", "22"],
  ["DEMRE 2020 BIOLOGIA", "1Lld_ucRLUB6s_Ug4c1nIPdyCrbU-SGWf", "166", "11"],
  ["DEMRE 2020 FISICA", "17K1CMEpOV-8oj5vv8RVsn5-RY9ygplr9", "168", "12"],
  ["DEMRE 2020 LECTURA", "15ccOFRY1vMaOpt8Uau1xBHmBDTmFT5bm", "173", "2"],
  ["DEMRE 2020 MATEMATICAS", "108NsyW1zfze4tWjWJvG9vqG2wHiZXC9K", "180", "16"],
  ["DEMRE 2020 QUIMICA", "1M6rmYxoiJVHChzOOC7YU7qebGqoR6xuy", "172", "14"],
  ["DEMRE 2020 SOCIALES", "1v4soBW3JciCWvCyqaun_HM7vBJfyrpCl", "113", "2"],
  ["DEMRE 2020 TECNICO", "1scCzxdFQNATdo2WCbfXVAgBTMuakCSYF", "166", "13"],
  ["DEMRE 2021 BIOLOGIA", "1UNZbDJVIz6oi_vQEtS3RCoyTvVJFOj3i", "127", "5"],
  ["DEMRE 2021 FISICA", "1a7CQaaVNQSMdledqCov0bCEjiuXGi-_V", "123", "2"],
  ["DEMRE 2021 LECTURA", "1nQO0yZJUqqj4WnJ1IOxKeEftLmIVIToY", "86", "7"],
  ["DEMRE 2021 MATEMATICAS", "1LVx5SRGKcGBI7IN_oOzRXG2cuE0krWj7", "120", "3"],
  ["DEMRE 2021 QUIMICA", "1jOSJNq7JhLByhy9sCdDntJHY0IYNRD33", "494", "12"],
  ["DEMRE 2021 SOCIALES", "1o5LwJ0lI7yMd2Qkekfa5d9wXOFW2zKqd", "86", "2"],
  ["DEMRE 2021 TECNICO", "1C89NtdA2kfFGxwsuUT4Lj8OQWPE_yuOR", "821", "15"],
  ["DEMRE 2022 BIOLOGIA", "1CxIfxLqc8sAsRBzq1xQ3A2cO6iWX6slc", "176", "7"],
  ["DEMRE 2022 FISICA", "1cLTAyePlgdsTwrc-ELahiXyPssurxl_x", "182", "10"],
  ["DEMRE 2022 LECTURA", "1zvUhN96Ey-JO_tv2qY_T5YZN6lNVDsSV", "159", "5"],
  ["DEMRE 2022 MATEMATICAS", "1wlqhT9a0LyEbnN4aX6IDQxg-fMaSftJ6", "160", "9"],
  ["DEMRE 2022 QUIMICA", "1craIqjoTKWA4kiZkNUJrz-WawZyxh-7m", "179", "8"],
  ["DEMRE 2022 SOCIALES", "1f4jZ29mD_bqEWjmirSMsB_cBbjMerzHJ", "136", "1"],
  ["DEMRE 2022 TECNICO", "1GS42nUhwqvF1VlEcg7Fse3f_cHA-gdkH", "180", "9"],
  ["DEMRE 2023 BIOLOGIA", "1tCfRiJHTXxwhBi8XhE7NIWAT_Z7j3X2m", "48", "1"],
  ["DEMRE 2023 FISICA", "1K6yYt7hyxG_GURMlUwKmSUvsvWXth0nt", "48", "2"],
  ["DEMRE 2023 LECTURA", "1S7gprQ2U6zlJ9UD3GUtDw4fKqfQ5IEW9", "48", "2"],
  ["DEMRE 2023 MATEMATICAS", "1WUIB3wKIGADCnM0bdhd3AOUP2KPiT2f4", "96", "3"],
  ["DEMRE 2023 QUIMICA", "1cTj9A6yXuXurozDw6FiSAyEngIEuNw1H", "48", "2"],
  ["DEMRE 2023 RESULTADOS", "1iykh3VcHKt-s3aSnRcqIQEJdlETC2x_v", "48", "1"],
  ["DEMRE 2023 SOCIALES", "1s0mPCPzVvQXsMFISEhDQW44CIB8pu47R", "48", "1"],
  ["DEMRE 2023 TECNICO", "13uodFHUsc3VH3msVY6OA--tHLp4EFEWc", "48", "1"],
  ["EPA 10 INGLES", "1lC9jLTZOkaIewR2lodxzpvoKV9sCQb2t", "43", "4"],
  ["EPA 10 LECTURA", "1_Ol2PlGgCVVB3ht0eN7gNh76l6bHQKCF", "47", "4"],
  ["EPA 10 NATURALES", "1DDhKirSeIM8IkRAVoTfSwUP5RhWPrgnZ", "54", "5"],
  ["EPA 10 SOCIALES", "15p3Ce6u8Y9EJ-4ozrMIKaDMs2BRdGfYH", "46", "4"],
  ["EPA INGLES", "1A3gU4dnmq7X2e9FCYVSfwyLHu51XYrEC", "50", "4"],
  ["EPA LECTURA", "1yE7pCuAkeW3R5XxViA_yMQ5NwNtN-g3J", "50", "4"],
  ["EPA MATEMATICAS", "1JHQC0Qz24szZ5dcQ5upligPPvEQPzOy1", "54", "4"],
  ["EPA NATURALES", "1dlT-CMFRKXJHv_06bu2qSqByP9SR8WIb", "49", "4"],
  ["EPA SOCIALES", "1XjBUJxXIeAT1B5aeNbGxA_rvy0Ec703E", "48", "4"],
  ["ES MATEMATICAS1", "1QZVu6lIyqzTZBw9FOpGE4NYrkT8dVSX2", "6", "5"],
  ["ES MATEMATICAS2", "1wil3ofoO4ImxTm_IjT67BPI8eHXBe4tk", "6", "3"],
  ["ES MATEMATICAS3", "1i6M7DM7EFYYxnUZzDe5WWnfosrCNRM4X", "6", "6"],
  ["ES NATURALES2", "1oln0NjjuR5-6yZF-LuNZ_atqV8EBwyGn", "10", "1"],
  ["F10 SESION1", "1FE3vgSiFVJN0sz36iyTqaMcudvGAu7EY", "20", "2"],
  ["F10 SESION2", "1fQOk5iNNrRKfGJ7l17OK1393sETz611y", "20", "2"],
  ["F11 SESION1", "11i1n6huRcM8k9Cxm65GFwhP1CwNwwE1n", "20", "3"],
  ["F11 SESION2", "1A-896wAGcKm6OZY4-IIf6Eig1BdvjuxJ", "20", "3"],
  ["F12 SESION1", "1i4J4t77_k6OsTdDrtIRvgvUxGbQy06lR", "20", "2"],
  ["F12 SESION2", "15ZrnJFmEchazJWLVXTVDn-6EDoD0zBtD", "20", "3"],
  ["F13 RESPUESTAS", "1SKvEow06VFd_9l626A4i6SMJRjP7kuWb", "2", "1"],
  ["F13 SESION1", "1yseuyBMbbCi_J58id3GfN5fRwK7ibZS2", "20", "3"],
  ["F13 SESION2", "13sp6cA7tMwPgSLN5fCAqp_Y1D1oi0i66", "20", "2"],
  ["F14 RESPUESTAS", "1ug4uwo6RGTszU6rLfXrryh2amC1uzpiw", "2", "1"],
  ["F14 SESION2", "1T6ho1lAYRlAXQNtNn-s2QODVNfmtQcM9", "20", "4"],
  ["F15 RESPUESTAS", "1T8_nibL8svb1AqN3ANxj11d6CIwKXZLT", "2", "1"],
  ["F15 SESION1", "1Pljb_Sk6SsAZbnNxGM4vpr-6Esx-QlDE", "20", "5"],
  ["F15 SESION2", "18XWYqw1wOEYCa7T-4DrOvPyVG8uCzdac", "20", "3"],
  ["F16 RESPUESTAS", "1LpGgwFpn9dtgIPsjkfaU_KAEYRlSAUsY", "3", "1"],
  ["F16 SESION1", "1o2-7O1Y23erWIuaE7KVBc7avjSPZvWr6", "20", "7"],
  ["F16 SESION2", "1kEI6gupVB5JRhWf31-RjRVdAhaZLK2tO", "20", "4"],
  ["FORMARTE QUIMICA", "1SfA7MAJWVCCIi5DqtsalU5Fno4vwALDt", "63", "4"],
  ["FOTO ICFES 2018", "1GXswpq0zH_SGsckuIQWKck_CG-YX-_CH", "65", "25"],
  [
    "FOTO ICFES 2018 INDIVIDUAL",
    "1CfR89asaI2XVamceIZBSRbMhcp-s34Aa",
    "58",
    "4",
  ],
  ["FOTO ICFES 2019", "1u8_ix8yMixbYM1S4ULz4uzJ59PXLdNG7", "50", "39"],
  ["FOTO ICFES 2019 B", "10aRE855ypGqSVe_l0gtQQOmkm4GJHe4d", "116", "26"],
  ["FOTO ICFES 2019 V2", "1WfkNtbqhH3g_3PO90WGVWaAoe9wXPuHk", "38", "6"],
  ["FOTO ICFES 2019 V3", "1Ek9ciNCZBd2YFgDUBYjaG4OhdyPg-qlW", "57", "35"],
  ["FOTO ICFES 2020 B V1", "1MA_Xxvv5dQRraIo9EurtVInwd90nsczo", "108", "31"],
  ["FOTO ICFES 2020 B V2", "1ccZ_dz0MWa_29C2j6wqPCyvbTXxEzPby", "71", "14"],
  ["FOTO ICFES 2020 V1", "1a1SDrIZD8GJ9bKsO5QIdBea6q08obY6O", "49", "26"],
  ["FOTO ICFES 2020 V2", "11psafMzRDOdpv7Wkok0DPcNjCgREobTy", "41", "22"],
  ["FOTO ICFES 2021 B V1", "1PkMcNj2aOxiVJFVHm41mLu5z-e4Q2Onk", "50", "5"],
  ["FOTO ICFES 2021 B V2", "1CK089v8CYftbSCED5lcL6D5qIjFgYqtc", "110", "8"],
  ["FOTO ICFES 2021 B V3", "1As1ogG0j4FA422izV2nps1WGrF7WyKxH", "63", "7"],
  [
    "FOTO ICFES 2021 B VIRTUAL",
    "1VFeUsZam40biByFAXNk-zczLs96pqW-4",
    "123",
    "20",
  ],
  ["FOTO ICFES 2022", "1uzlK4w6HM7LGraPjF2bgzKC5BQwZ3qF7", "130", "11"],
  ["FOTO ICFES 2022 V2", "1YFcN2S-Yl2D3mgz3UWDRTRGfGYIJEbEN", "44", "3"],
  ["FOTO ICFES 2023", "19zl59aqqd8x04mLJNG7aECLDrqRuyhEl", "39", "9"],
  ["FOTO S11-A1", "1fYbrimrr1duPwgZyBruYcsOx0m2hZjk4", "56", "41"],
  ["FOTO S11-B", "1RZ-c5iu5IGbFyUPVnjVgvm5uGnLBAOqZ", "56", "10"],
  ["FOTO S11-C", "1UOvVrMCAtihiN6XMdTm9qwUUHQBNGW8Z", "56", "38"],
  ["FOTO S11-D", "1HCFOrxcse2ATLJFPPxes0ZAtO8nBFpRA", "71", "79"],
  ["FOTO S11-D RESPUESTAS", "1DszA-A0xTgJmYOcT0Eqa4KBeuZj9SIzc", "35", "42"],
  ["FOTO S11-E", "1hOLFRZivWW5CGNAiOmrCDYARBS6byBHD", "56", "35"],
  ["FOTO S11-F", "1gpa-gm8xIp37jASqkVyeuJuEDl2R6cY4", "56", "25"],
  ["FOTO S11-G", "1BxZKbGWlRVWiIxEok7TAfft1oNx8897C", "56", "15"],
  ["FOTO S11-H1", "1Wmb8pwHhvPX8RgkTQ64joQe7n4ebF1hB", "28", "13"],
  ["FOTO S11-I", "1OUbTfQDm7-x4R9OfcvvM4Bed4-J3P7c5", "40", "50"],
  ["FOTO S11-I1", "1j0oWMlb6LIIzLWJF5iv-RSncNgHYSc0r", "69", "17"],
  ["FOTO S11-J", "1DQPG9lBeWca3dqVWEnTCDr5_9Hg619fN", "42", "9"],
  ["FOTO S11-J1", "1NUGmKFJGov4DrYEuAX37weU9exCqcqzk", "72", "3"],
  ["FOTO S11-K1", "1Gi4D-cB6B9Z2f_7TXbSiz1MTbsdsu-Do", "56", "44"],
  ["FOTO S11-K1 RESPUESTAS", "1j1WZf8UDkbdTQU05T8-yh36w3VMv3Jxq", "0", "23"],
  ["FOTO S11-L", "19bKuSI6uCEHiDnhPiPsNOeJkyxJCXjRW", "55", "38"],
  ["FOTO S11-L RESPUESTAS", "1TR7sWPhnSeP06ZhbmUDJjRBwfCvLxjYv", "55", "38"],
  ["FOTO S11-N", "1HTcO3n79hw6uAOJko7DyH-s0XfumRDM4", "56", "28"],
  ["FORMARTE MATEMATICAS", "1kZhbIaxH5CdCymoGBf9OfsinrOI13MLt", "72", "3"],
  ["FORMARTE SABER10", "1DShqbvPTqel-IvKtuTO_ZOZl2evCWVJz", "35", "5"],
  ["ICFES 2003 A", "1EkF4f1nR5_uAenoOSHD5dGcsIH3p3zYL", "163", "8"],
  ["ICFES 2003 B", "15q9n3j9j911iUwK_UnOInBIlZ-6goePq", "142", "8"],
  ["ICFES 2004 A", "1No4Bx-t1P-h_g9ZnQmpVnxkskSXKr7QX", "36", "1"],
  ["ICFES 2004 B", "1kZ20yZjoM7aQipkrm-FVG5TCHb7rQsOl", "43", "1"],
  ["ICFES 2005", "14Y00Nt_LD-Lsd9lwl1jh2b2goppPkH16", "28", "1"],
  ["ICFES 2006", "1ugwmANcaqZoMIbJSYdKaCKWYNxBU3o2C", "152", "10"],
  ["ICFES 2009", "1Bskzz0Cp6Wy1XJLVQHphJROUDptaOUt-", "669", "21"],
  ["ICFES 2010", "1EBtGoA6mhURVw21F_BxJj0PAzf5EP3-B", "109", "14"],
  ["ICFES 2012", "1rGxw_gYTclDoeJZ3ghxIRK3I1oV0y0PV", "66", "2"],
  ["ICFES 2014", "19NNBNGWqPD1ISXbk1v6QgjhiH0ufx-kn", "40", "3"],
  ["ICFES 2014 FISICA1", "1cDBKyzwGBpL4vlqqHyiRhHbs4-UIs12l", "14", "1"],
  ["ICFES 2014 FISICA2", "17Bf0jrwfmRGf2lZ2XenyQjZAmyS2-dss", "8", "1"],
  ["ICFES 2014 MATEMATICAS", "18HyHbcsofx00ex6WDd9XcQgGtbNzubul", "31", "2"],
  [
    "ICFES COMPLILADO del 2015 al 2017",
    "1vBbtVGcPU_snJ3O8Wt4Cz2KfZYaNWtNP",
    "44",
    "11",
  ],
  ["ICFES 2017 GUIA", "1XuVxRPxVnuoyqllscvJkn7LNqfxWBKAP", "111", "9"],
  ["ICFES 2018 INGLES", "1km5lNTDL5B8IpLT438mQ1RxEc2HFxcTT", "21", "3"],
  ["ICFES 2018 LECTURA", "1Hg8Y9l0VzeIV1RvM7p2KmMbN-U8sR_R0", "29", "12"],
  ["ICFES 2018 MATEMATICAS", "1XNl_uQuzZ_jNI71BIeNQlFth6YD53EeR", "28", "7"],
  ["ICFES 2018 NATURALES", "15ik5uk_IboCiD2VPirq13kbykzvQGMXM", "28", "6"],
  ["ICFES 2018 SOCIALES", "127zPCnkn514mKAxu5_Q-1X4lRt_6IpXH", "21", "7"],
  ["ICFES 2021 REMAKE", "1Oh45bHHNcgTRJE3-MLcG2LRUF_IqaLG4", "96", "5"],
  ["ICFES 2023 GUIA", "1XmbVYnCSfuJiGBSxLG79jDHIp7LuTAty", "68", "3"],
  ["JUAN TEMARIO", "1W2dqe9bRK8soIyUSY3fKOfNpIjEyt62c", "11", "1"],
  ["K ALTERNO 1 FISICA", "1D2racAgK3TZk3lFc35AS9hhn3TIjKfNa", "7", "1"],
  ["K ALTERNO 1 INGLES", "1iAsQ6uSPbKXonXSqJZNHTOLQzyr-W5mn", "7", "2"],
  ["K ALTERNO 1 LECTURA", "1cEA8n2iuCYekJ8WscvM8eqy73LO2XuX2", "9", "16"],
  ["K ALTERNO 1 MATEMATICAS", "1PRdTVA0m4s4bwmlye5wupnKnDeD4ZXXN", "17", "3"],
  ["K ALTERNO 1 QUIMICA1", "1mrW_AVdIkaq7LCtV-uoS-1yF6trxhiq8", "4", "1"],
  ["K ALTERNO 1 QUIMICA2", "1GyBCq1sEbT0iFNCEGvB0oTFR7GAJmnEk", "6", "1"],
  ["K ALTERNO 1 RESPUESTAS", "1I1gyrR9EZClK0yQ5gqCba5QPbCdNHGeY", "1", "1"],
  ["K ALTERNO 1 SOCIALES1", "1t2B2nZbcHG2zVjBUOJe0wHDpVmdDccAc", "9", "3"],
  ["K ALTERNO 1 SOCIALES2", "1nwh7E9_OytPSONit8jFDJFzBzPxh1XOu", "6", "1"],
  ["K ALTERNO 2 FISICA", "1q0bWWGeP4hAIKGT1bHSMObQgegA3rY4e", "6", "2"],
  ["K ALTERNO 2 INGLES", "1uAGLUxjVm-e4zHuUbMc34AigxH0Li_rz", "6", "2"],
  ["K ALTERNO 2 LECTURA", "1s9F5rEiPFnMZZlX_Wm6KhTMYkSl9PwVQ", "7", "5"],
  ["K ALTERNO 2 MATEMATICAS", "1rVvy3bue2IMf3kvUrypfLr1z_YeZ2clu", "11", "2"],
  ["K ALTERNO 2 NATURALES", "1pEdDKIRHk26Q-ryQ4vpMH3mG1cynM1-B", "6", "13"],
  ["K ALTERNO 2 QUIMICA", "1d6wHFT557YhhoSVxP7EZXDdZJ14KnwHK", "10", "5"],
  ["K ALTERNO 2 RESPUESTAS", "1iW135pIhpgtnYGCd6T-KU1hIwQieKkRj", "1", "1"],
  ["K ALTERNO 2 SOCIALES", "11Z8LXd5cPHJ9gMSe_RSrwv_8MB3ELb_N", "8", "2"],
  ["K ALTERNO 3 FISICA", "1zT6EdLo380PnvgWXH6a7KolGzipIXUcb", "8", "5"],
  ["K ALTERNO 3 INGLES", "1fUHOdZFqPUs88fXOjS6c3wCcdDs3aw_-", "4", "2"],
  ["K ALTERNO 3 LECTURA", "1VDpR6E5mlNA2D2cRHBt_2JPrbhFf9TEa", "7", "1"],
  ["K ALTERNO 3 MATEMATICAS", "1SPEYDyC-uSqlNt53iYHRRLMdjkKTXmrT", "7", "4"],
  ["K ALTERNO 3 QUIMICA", "1gWNatiZrNQhzoTSWFfDV_xC6xfgJyc1Y", "6", "2"],
  ["K ALTERNO 3 RESPUESTAS", "1ZSn89D0J_Q4ahPZwOcDj9RsaQg1pvbfF", "1", "1"],
  ["K ALTERNO 3 SOCIALES1", "12Mvx9Y9W291r4FUWRf1wykwLqlHnZBKq", "3", "1"],
  ["K ALTERNO 3 SOCIALES2", "1NgwO4m8TcZBWib4ZQu-cRFPMoj-N45B1", "2", "2"],
  ["K ALTERNO 4 FISICA", "16UmKUit28Ro1kFixrmlpfIiNlJDsWUi8", "9", "5"],
  ["K ALTERNO 4 INGLES", "1OplC8hvHe-TOcjIjDoI8Xv59amyBnhlg", "6", "16"],
  ["K ALTERNO 4 LECTURA", "1JVGi0Yd8Ng8ulhYsry_ZEbHCVvavxQom", "10", "3"],
  ["K ALTERNO 4 MATEMATICAS", "1G433x5kUrZJ2hkEm7EnSKFeNdWSpyTzy", "18", "11"],
  ["K ALTERNO 4 NATURALES", "1UC0AuVBHbv4P8Mv3vlCXEMkQzzwPepbs", "12", "16"],
  ["K ALTERNO 4 QUIMICA", "1qRvypEIA0j9ePuZ8Wa0HZ_QdEzIPfwMR", "10", "4"],
  ["K ALTERNO 4 RESPUESTAS", "1hJPvQMLrzSQeMfvvHCtUd54epxtrJgHm", "1", "1"],
  ["K ALTERNO 4 SOCIALES", "1Fi-hy9c1vVfCM2OUi_uNz_UMToJ8H5a3", "8", "3"],
  ["K ALTERNO 5 FISICA1", "1eBMGOaTri-opA850aFzJk4ZytXSS70C8", "2", "2"],
  ["K ALTERNO 5 FISICA2", "1zjG1q2TWqFn5bkQyYz0Yh6_gDzQKzMCo", "6", "3"],
  ["K ALTERNO 5 INGLES", "1FUXW9Pmwewz7WTAX5sf3RCBpnKXNLVr0", "5", "1"],
  ["K ALTERNO 5 LECTURA", "1Yw0fVbTV1l9hjd862imsGcllNNPJ4Ddl", "7", "1"],
  ["K ALTERNO 5 MATEMATICAS", "1MEZ-lJ5I6oyF3ParTx3jT_7g32c7Cs0y", "7", "2"],
  ["K ALTERNO 5 NATURALES", "1xj_ngMjnurwEFx5dG0JSq_hInuvHYf-V", "7", "5"],
  ["K ALTERNO 5 QUIMICA", "1nMkstfK3J6H7laWnbsELu6XkTL7mTttC", "6", "2"],
  ["K ALTERNO 5 RESPUESTAS", "18plgO3tASjmdnk5X7oA-cd-JOlMBa6iQ", "1", "1"],
  ["K ALTERNO 5 SOCIALES1", "1htCSw5uQp-qmDwhWtzBHVleCP2PDAknc", "4", "3"],
  ["K ALTERNO 5 SOCIALES2", "1w467AxQC_gh1jRZFaok_SODbf2yJoENb", "2", "1"],
  ["K ALTERNO 6 FISICA", "1D9BbO4aHK_cs-0JjqLoBVhVOnB4jPEBJ", "8", "1"],
  ["K ALTERNO 6 INGLES", "1QPqtOUutRMeFnemRRSXlwX2fhIXYBUP0", "6", "8"],
  ["K ALTERNO 6 LECTURA", "1FJpKBAsoUavacTuSWev-4_XP17CJFqm9", "8", "1"],
  ["K ALTERNO 6 MATEMATICAS", "1U_TNCiGlNrOKOruO4yBytwISVw0t370R", "19", "2"],
  ["K ALTERNO 6 QUIMICA", "1h3Qo2Oin8OxtJc5MTVSBoE81ScfsEjLo", "8", "1"],
  ["K ALTERNO 6 RESPUESTAS", "12cbPddFxY6m38I3g2wHVy4AHLphJcxfu", "1", "1"],
  ["K ALTERNO 6 SOCIALES", "1IGo-TaPGYBesnjTEPgreZZQACdgLgZQe", "10", "1"],
  ["K1 FISICA", "18Kaq9WF-FX5Rc4YE6n_1cbcVHQwbzrQH", "5", "9"],
  ["K1 INGLES", "1is2JSEKEq6bBN3D5SgKONMq0QC0nDUni", "5", "8"],
  ["K1 LECTURA", "1jFlKCuP3wnOYblL-zWMa9p1JOGoa7glr", "7", "5"],
  ["K1 MATEMATICAS", "1HXqohKGov0cgdV1GWfCHhS89a1F2f2cV", "19", "11"],
  ["K1 NATURALES1", "1NOAIX0cquF8wFMldq37E2Z5DDdQj4krW", "4", "6"],
  ["K1 NATURALES2", "1KHcd2IjaqnwMd6hvrOW8sbd0Eo69Uunz", "7", "3"],
  ["K1 QUIMICA", "1Ck3Kg4KvgJgjKMwI8C0ujdh_JWGfhPPK", "13", "1"],
  ["K1 RESPUESTAS1", "1cLSLMf3vjZGfBOBQ6rr7F5XRpCMOw1_I", "1", "1"],
  ["K1 RESPUESTAS2", "1CxJW8guMH9W_Pwsg3HuObxzrgNhIw2w8", "1", "1"],
  ["K1 SOCIALES 1", "1N2MuyjvtFR9Onaz6Aa_mcWKM50JYjPyS", "6", "1"],
  ["K1 SOCIALES2", "1YjGZvq73Oq2nSyUWLuu1yyruZqpV76mv", "4", "1"],
  ["K2 BIOLOGIA", "11vDE-nm_GJHgMUrwu0212V6ljmnQ0obJ", "5", "5"],
  ["K2 FISICA1", "1JBNx7dCxP48vtgnJmiq4Sj94pBt4ER42", "4", "1"],
  ["K2 FISICA2", "1Cv1I473AYkNIH7GERJSjOZ4hkUPGPgC2", "4", "2"],
  ["K2 INGLES", "1YecXpzGpBzk-rLBLbHN_kQIejVJjtRoB", "7", "8"],
  ["K2 MATEMATICAS", "13ttJku_GTVLIeuZ2PQU3pDPxtDWgC2GJ", "10", "1"],
  ["K2 QUIMICA", "1Qz2Gc_rM0cI7PaTvTQFcEWNHpBcSozGF", "7", "1"],
  ["K2 RESPUESTAS", "1ZO8R0tRh-06uJXMvWHYlZwk3OQRZKJks", "1", "1"],
  ["K2 SOCIALES1", "1ta07rZlngXPIHDpfhs50eEUs-_HyvmXM", "5", "1"],
  ["K2 SOCIALES2", "1jPSTbiPLW0jWRBMtBbx1AMKgFi0GMPQg", "10", "1"],
  ["K3 RESPUESTAS", "1A792N2iqS5TQ0CRgFwEDwcVGt6oMfp8E", "1", "1"],
  ["K3 SESION1", "1kRZyb2KxxhUVkVVDLNetWUZI9EAWSFJe", "20", "4"],
  ["K3 SESION2", "1JgcQR756Mnv6DZGuzcYGJLchnGU6jPgi", "17", "1"],
  ["K4 SESION1", "1YDNjSPhjUA8a1L7Y9tgsgT_3tpBmrPoA", "15", "2"],
  ["K4 SESION2", "1juUe3FfxKA7ZMYfO77YEGEbe0Rl9fuw3", "17", "2"],
  ["K5 INGLES", "1_9AYkUIrVJGBINU73_WQsntSq9CTcvQg", "5", "2"],
  ["K5 LECTURA", "1iG_b65h8PxA_euW92ej8oB4SFb0J2sbI", "16", "3"],
  ["K5 MATEMATICAS", "1uW43UztwgqMy5WG6CY6EiVxtlBaq5czi", "14", "4"],
  ["K5 NATURALES", "1I1ktxrADah0jTIL3l_mZigAzWNMy2UXe", "21", "7"],
  ["K5 RESPUESTAS", "177ys9PkoiMTg9J1WjV8ACYsEqf9mnfLx", "1", "1"],
  ["K5 SOCIALES", "1Dvu_aDrRz32mPQ1BDJZ9Il0_SfzliPQS", "16", "8"],
  ["K6 BIOLOGIA", "1n5zuWqk44oOfIeCBGVQ79gI-tm-hxqm9", "32", "30"],
  ["K6 FISICA", "1LAlor7Ei0dQyBTwuYXpcK-goN18UFvJY", "5", "3"],
  ["K6 INGLES", "1lhCLcjxwPLjP3kO6VUhsuAbdDuZnSRw8", "5", "2"],
  ["K6 LECTURA", "1KW8bqjBL2k-nt-fpoNni99jZ7CaPEpL6", "9", "9"],
  ["K6 MATEMATICAS", "1ZzAKDcVPQ0ZJt1c9MllDRRo0_jQBmOYQ", "10", "7"],
  ["K6 QUIMICA", "1a2mUIHF_SUe8zQCc__UCdRKQjmLQX_j9", "6", "3"],
  ["K6 RESPUESTAS", "1C28xXfMPu1GCkBN9Tjb5rmar4jM4LHKu", "9", "2"],
  ["K6 RESUELTO", "19v_9e05Al28Ssv1-RFEOw2MWso15vGka", "58", "57"],
  ["K6 SESION1", "1ZwtLz8b46jw5Cx0VdMMFxvtgWo_3Hxxo", "32", "30"],
  ["K6 SESION2", "1ktzR3SeYu3I371qilGRr7MFI-epUymqU", "24", "20"],
  ["K6 SOCIALES1", "14BMl2mVHRFhfjNYVFFjhLmFWDEn4W323", "5", "7"],
  ["K6 SOCIALES2", "1t_yyOau3dh2OaejLZHAHe9g3cptOl-uf", "7", "10"],
  ["K7 BIOLOGIA", "1xyL68Hh3UM-5VbCyI35R5OMopNAj5aM4", "9", "8"],
  ["K7 INGLES", "1IbHdrrqpBrhKz4cZISM9meUkJvV1dbvM", "6", "1"],
  ["K7 LECTURA CRITICA", "1Bj3Vg7hyOcbKp3gQwfXFdm38DM-HewsS", "8", "1"],
  ["K7 MATEMATICAS1", "1fOgXQTZDs62xFeKRU7bvOR_oQjFKdhMZ", "4", "1"],
  ["K7 MATEMATICAS2", "1hNIORKsyIYap1rXlUvb7yM9k3GXVhX7D", "5", "1"],
  ["K7 QUIIMICA", "1H5sQLSV8fD8rl028AQ3zx7kNb7YCL0O5", "8", "2"],
  ["K7 RESPUESTAS", "1u_ciQy_usgA26p8VftwAeHn3fIAxTlDR", "3", "1"],
  ["K7 SESION1", "1jGrS11XMsPHbehIoeIqeCRlenrhu0VpA", "24", "23"],
  ["K7 SESION2", "1WdDwSjgtklg4BbqvIs797D0XPlQXngzD", "30", "20"],
  ["K7 SOCIALES1", "19X-9u-FBmoOftFuucjgJOImrWrAlya8E", "6", "1"],
  ["K7 SOCIALES2", "1NgC9MqxEdqE17aV-OyGudHhSPCF7rsUc", "2", "1"],
  ["K8 FISICA", "13MJ7A3FeUdTdiTS6EOI_lSzFrNyw-tY4", "7", "15"],
  ["K8 INGLES", "1NRcFa0Mn8jVV-n_Ul82NQZ4iOS2BoCdn", "4", "15"],
  ["K8 LECTURA", "1gOSNloW6OuMyoQyWSLBWk-zjRamHEeCZ", "6", "11"],
  ["K8 MATEMATICAS", "1Z3Mbw9abBTB4mYeIrxHcTRy35u0ZM0nz", "7", "15"],
  ["K8 NATURALES", "14OFCvSm7Kf7nsWwtngvhkOzoG1amiJKB", "8", "15"],
  ["K8 QUIMICA", "14LJrUfTU2DUyZdtupCf-oET9tr-oluWY", "7", "15"],
  ["K8 RESPUESTAS", "1B3vo5_7lJ57qNSZb0SBeIBG30TlRtkiD", "3", "1"],
  ["K8 SOCIALES", "1g-_31cJYQNV-ROxv8GYungBvBfgapbHt", "7", "11"],
  ["MATERIAL CARLOS QUIMICA", "1jyXDqN63I2jdc3nSQnUXhla0X-BUgoHk", "20", "1"],
  ["MATERIAL JUAN NATURALES", "16iy5ibB1zFHhy2qv0ehas6usENkPCodF", "10", "2"],
  ["MO FISICA", "13EX9luFLSuTET7coz6Q5m0_2spt8bcRK", "8", "1"],
  ["MO INGLES", "1I2xb_PUvqPj6sN-MRUtJ76vounYNcoS5", "6", "2"],
  ["MO LECTURA", "1FFnq1oDgaYFPzKzSx5VI3dfFNMHwKJm-", "8", "1"],
  ["MO MATEMATICAS", "1ACJ69zU8JvJlrD_7BbYnXJDtOLSKiZBB", "5", "3"],
  ["MO NATURALES", "1vJgN7YY1-OY79BGPOkiTBAmD-WkFcYtO", "8", "2"],
  ["MO QUIMICA", "10aikML2FpD05vtLWod2w_t8i08Qs4fUZ", "10", "2"],
  ["MO SESION1", "1n_pBoR7Ko5B0tngKAmzXy50lZN0b_DaE", "28", "2"],
  ["MO SESION2", "1f6s7FF4WmCtQwRMeEVcC2fYIaDXgclG7", "28", "2"],
  ["MO SOCIALES", "10YhmSPgDAblbvq6YL4AgRNzjeJOqr5RR", "8", "1"],
  ["PALABRAS B1", "1o15JEMNh2_QdFPrqBErxUEcqHTpbOyMR", "20", "1"],
  ["PREPARACION 2017", "1rC2M_g28zIyubzRFp89kJj13kPZ3tvUA", "142", "5"],
  ["PRO 2014 INGLES", "1leyJWV8mxTvRjztIaEHaeHyLaOTSL_T8", "13", "3"],
  ["PRO 2014 LECTURA", "1pUeg-uRlU26tAl23p7YWcq1VfSbwB13w", "18", "1"],
  ["PRO 2014 MATEMATICAS", "1bECVUF0D08MnCg3UHZn8HmvrMOxMYHI2", "16", "1"],
  ["PRO 2014 SOCIALES", "1P8iUm8akdbjNJRwcWCnLgCTEPC-tQazV", "10", "1"],
  ["PRO 2016 INGLES", "1QQE-VxTlp2a84dEj5NsjdcNHXsE997bv", "15", "2"],
  ["PRO 2016 LECTURA", "1apzEq6TYvpqTp3ueTwh5zmX6qN3_9wLm", "22", "1"],
  ["PRO 2016 MATEMATICAS", "1vLNIh710XF4Fw5uQbRzmVA-kibT1VnY7", "19", "1"],
  ["PRO 2016 SOCIALES", "1BkXneuweyy_vY6yhbXRctPkoF2klIfWZ", "18", "1"],
  ["PRO 2017 CIENCIAS", "1Y8xJzWJ_OkQdeqL_Tf8zZ68uk37ZfICs", "36", "2"],
  ["PRO 2017 SOCIALES", "1LSU5xfPkuclQl29efiDUCcjhz5XHeLqt", "26", "1"],
  ["PRO 2019 INGLES", "1NhNjhpyxu6TuvEr46QAsGqKeV2DwurhB", "11", "2"],
  ["PRO 2019 LECTURA", "1GlZv5Ur5jpr1fwHBizJMaFqB-GiWsOLj", "19", "4"],
  ["PRO 2019 MATEMATICAS", "1JX8I6nFYX2I2PEq42XsSmCUbxZICVkot", "17", "2"],
  ["PRO 2019 SOCIALES", "1lcUCKkMDgNgDp4_PWLPuCNe_4gnI_4Rk", "15", "8"],
  ["PSU MATEMATICAS", "1na298HXeYENziLUg5L78FuTG6cK-XP0K", "85", "2"],
  ["PUCP LECTURA", "1DRhm-ANwswaUnznL-CxMwpCMI3cuZjrq", "729", "35"],
  ["REPILOS1 MATEMATICAS", "1ybUSN2HUwE91AwflkheXbo7X_mDjsc0F", "3", "2"],
  ["REPILOS10 LECTURA", "1Zy1wk7dyj48yrnmXRz1SpkcLA6QAvmw9", "3", "1"],
  ["REPILOS11 MATEMATICAS", "1mDfzuc_-LICgxtogYw2vwxzGM10WleFQ", "3", "1"],
  ["REPILOS12 NATURALES", "1shdUNZ2cGZpLuke5o0ivrlFGSQCgTmc-", "3", "1"],
  ["REPILOS13 SOCIALES", "1FzCPG5-jW9BysIpJ2BkFa7sr13YXcOHl", "3", "1"],
  ["REPILOS14 INGLES", "111VIOH5Z8fhgqvC4kk9GWNlz0ROEE_s0", "3", "1"],
  ["REPILOS15 LECTURA", "1ioilFvB6JPSsYdxTW9h6vuz0B7nqgFm8", "3", "1"],
  ["REPILOS2 NATURALES", "13mETaVE2JM82I9QqDfA0tvYpegPuy4Sa", "3", "1"],
  ["REPILOS3 SOCIALES", "1Rxg-boQO47EL8xjiInUok9bQ7uwb-8KE", "3", "1"],
  ["REPILOS4 INGLES", "1pIPPhNQb1RY-KcwNM_4z6ZDv9oS7yqn6", "3", "1"],
  ["REPILOS5 LECTURA", "1jVHzQyLXZYdi0IvpJ2vxnlphrPEvvQ4e", "3", "1"],
  ["REPILOS6 MATEMATICAS", "1EvoKK18xIScBH_BDE0UbgL4VqMs6QS4q", "3", "1"],
  ["REPILOS7 NATURALES", "1tJ-2uyJZiNyIn_ZNOyCfl-g4LIBtRqwq", "3", "1"],
  ["REPILOS8 SOCIALES", "1ybUSN2HUwE91AwflkheXbo7X_mDjsc0F", "3", "1"],
  ["REPILOS9 INGLES", "1_1xM1WCT1DZJXLE_L3CqFLEDuJyp6_Mn", "3", "1"],
  ["S11-A1 RESPUESTAS", "1_HzQCe00bXkzdhy1IhKK_hn3qGlnOzbd", "7", "1"],
  ["S11-B RESPUESTAS", "1gBoeXe5G64XAOIX9mXzOd3FMhwdVHzcX", "6", "1"],
  ["S11-E RESPUESTAS", "1uFys1_ZS4KGBBUm0XzsTuEruYeLsqQyc", "4", "1"],
  ["S11-F RESPUESTAS", "1ZG_ObcW07_4Xa49NoQ0eq8zUKxnfdr1z", "2", "1"],
  ["S11-G RESPUESTAS", "1A8UYjIFCMK7Dl8LdjG_gqZdi7Ss5t7A8", "11", "1"],
  ["S11-H1 RESPUESTAS", "1EHYjkPO-ByXNfqwFMCNvG2pkJVZnntIc", "6", "1"],
  ["S11-J RESPUESTAS", "1kZepdKvv51UREvnCoBqrRE6yucz2gcN-", "6", "1"],
  ["SAI 2020 INGLES", "1JmqdsWp9qI3lXsW7qzaLEc8OYvkWG9Nx", "6", "1"],
  ["SAI 2020 LECTURA", "1NOJqq1YaPEkeLsazdrZdm_6DMX2yEDwq", "10", "4"],
  ["SAI 2020 MATEMATICAS", "14pn-El4c4CrXpGmVDbQRGgTNmqDk8zH5", "8", "2"],
  ["SAI 2020 MATEMATICAS1", "14XZF1YKr7ty4n0EXHaaH0vjOWomqSVEa", "5", "2"],
  ["SAI 2020 NATURALES", "1HxmIzBmcbctOPQC7PXhGJgEgF0SPBhVD", "9", "2"],
  ["SAI 2020 NATURALES1", "1pY0Awsu-PshsjFAffQNoC09qhM9WmWHw", "10", "3"],
  ["SAI 2020 SOCIALES", "16QX40Pn5URc5ToQagYJH8060dyAEQwYk", "6", "2"],
  ["SAI 2020 SOCIALES1", "1q7Y5QQTWgmFtGp4QN9aWVp6O_pD8TpxP", "6", "2"],
  ["SAI SESION1", "1b63dcCv8gLmeb7XTY2mUVNrQin3KgMMV", "31", "3"],
  ["SAI SESION2", "1kuyVmpll7QRbUNr50xfrjN5Aiak0l8kB", "30", "3"],
  ["TYT 2016 SOCIALES", "1p9pYSU8rdteXWkF4T7GaB__n9VH4eO5i", "14", "1"],
  ["TYT 2017 GUIA", "1z72hVctAEPLaKcWUkEge98QzbqlL5fyo", "87", "5"],
  ["TYT 2018 INGLES", "1bbZP0iZWIMnpsz5L-bcWHd2DLyVeiSoA", "12", "1"],
];

const carpetas = [
  ["AM", "1yeOtmIKBC-MoICnlEkqm-GCdJfAfQRo-", "119", "676"],
  ["BGU", "1Scu0KSyF61SWGlwY8bRkP7-evy2YNp0B", "21", "865"],
  ["CALENDA", "1JyIgcLBVj8pEWE8XWvsFxBrPbGcBmbXM", "17", "47"],
  ["DEMRE", "1exl3avI9A7mtkfZ-m7OTBecyB_lDgiJn", "36", "272"],
  ["EPA", "12Nj64dB12Z6pDnvBiI038rgHre_W0vO4", "9", "37"],
  ["ES", "1CFLmjf411sDV95knwLo2LXt9d9IMAuqf", "4", "15"],
  ["FORMATE", "1du-HVvwSuHD3U3WVbNpg3TxgSjsJ9Ao2", "3", "12"],
  ["ICFES", "1DXFu_p87cTuoysc77G2QLsdY4hhZYJxw", "39", "427"],
  ["MO", "1iafqtTO6YhzvXJ6VBKnST4MTvXB33C4p", "9", "16"],
  ["OTROS", "1acGQwrZW-rfuCXYaNUgUpCEaheXcVFKr", "8", "71"],
  ["PRO", "1oDNGpJFARVEIclih8YmdLdw85lwp7-6L", "14", "30"],
  ["REPILOS", "1eTyYDaI90mGsF-fvGX_Ava7TL5wJXnUy", "17", "16"],
  ["SAI", "1157jnB7G1o89sIGN0XdjhAQnIfpD3j5m", "10", "24"],
  ["TYT", "1Apph27qGtRXnRhqzEjdEnLSCiSiGqvYP", "3", "7 "],
  ["SABER11", "18DmrGRnsjgUavGZ-BXtvkY2NLl_gAvZB", "25", "555"],
];

const palabras = {
  lectura: "lectura",
  sociales: "sociales",
  naturales: "naturales",
  matematicas: "matematicas",
  ingles: "ingles",
  fisica: "fisica",
  quimica: "quimica",
  biologia: "biologia",
  icfes: "icfes",
  epa: "evaluar para avanzar",
  tyt: "saber tyt",
  pro: "saber pro",
  es: "explore saber",
  mo: "Milton Ochoa",
  bgu: "bachillerato general unificado",
  demre: "DEMRE (icfes chileno)",
  foto: "fotografia",
  v2: "versión 2",
  v3: "versión 3",
  v1: "versión 1",
  s11: "saber 11",
  saber10: "saber 10",
  psu: "PSU Chile",
  pucp: "PUCP",
  sai: "SAI (seguimiento académico institucional)",
  k: "Abel Mendoza K",
  d: "Abel Mendoza D",
};

const remplazosMaterias = {
  matematicas: "",
  lectura: "",
  naturales: "",
  sociales: "",
  ingles: "",
};

// N O  B O R R A R
// function allClavesF() {
//   var allClaves = [];
//   for (let i of enlaces) {
//     const aux = i[0].split(" ");
//     for (let j of aux) {
//       if (!allClaves.includes(j.toLowerCase())) {
//         allClaves.push(j.toLowerCase());
//       }
//     }
//   }
//   return allClaves;
// }

var titulos = [];

for (const enlace of enlaces) {
  for (const elemento of enlace[0].split(" ")) {
    titulos.push(elemento.toLowerCase());
  }
}

titulos = titulos.reduce((actual, elemento) => {
  if (actual.indexOf(elemento) === -1) {
    actual.push(elemento);
  }
  return actual;
}, []);

export function valuesPalabras() {
  var valores = [];
  for (const clave of Object.keys(palabras)) {
    valores.push([palabras[clave], clave]);
  }
  return valores;
}

export function allCarpetas() {
  const r = [];
  for (let i of carpetas) {
    r.push(i[1]);
  }
  return r;
}

function arreglarListaMaterias(lista, conMaterias) {
  var nombreSplit = lista[0].toLowerCase().split(" ");
  var auxNombre = "";
  for (const cadena of nombreSplit) {
    var numeros = "";
    var letras = "";
    if (cadena.match(/[0-9]+/g)) {
      numeros = cadena.match(/[0-9]+/g);
      if (numeros.toString().length == 4) {
        numeros = "año " + cadena.match(/[0-9]+/g);
      } else {
        numeros = "N° " + cadena.match(/[0-9]+/g);
      }
      var letras_ = cadena.replace(/[0-9]+/g, "");
      if (letras_ != "") {
        letras = letras_;
      }
    } else {
      letras = cadena;
    }
    if (typeof palabras[letras] !== "undefined") {
      letras = palabras[letras];
    }
    if (typeof remplazosMaterias[letras] !== "undefined" && conMaterias) {
      letras = remplazosMaterias[letras];
    }
    auxNombre = auxNombre + letras + " " + numeros + " ";
    if (auxNombre.length !== 0) {
      auxNombre = auxNombre.charAt(0).toUpperCase() + auxNombre.slice(1);
    }
  }
  var nombre = auxNombre;
  const resultado = [lista[1], lista[2] + " pág", lista[3] + "MB"];
  resultado.splice(0, 0, nombre);
  return resultado;
}

export function dbMaterias(variable) {
  const claves = ["mat", "lec", "nat", "soc", "ing", "fis", "qui", "bio"];
  var result = [];
  for (const valor of claves) {
    if (variable.toLowerCase().includes(valor)) {
      for (const enlace of enlaces) {
        if (enlace[0].toLowerCase().includes(valor)) {
          result.push(arreglarListaMaterias(enlace, true));
        }
      }
    }
  }
  return result;
}

export function dbBuscar(variable) {
  var result = [];
  for (const enlace of enlaces) {
    if (enlace[0].toLowerCase().includes(variable)) {
      result.push(arreglarListaMaterias(enlace, false));
    }
  }
  return result;
}

export function buscar(valor) {
  if (valor.length > 2) {
    const resultados = [];
    for (const string of titulos) {
      if (string.includes(valor.toLowerCase())) {
        resultados.push(string);
      }
    }
    return resultados;
  } else {
    return [];
  }
}
