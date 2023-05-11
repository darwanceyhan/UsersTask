import CloseIcon from "@mui/icons-material/Close";
import {
  Stack,
  TextField,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Avatar,
  Button,
} from "@mui/material";
import UserInterface from "../../interface/UserInterface";

interface PopupProps {
  users: UserInterface[];
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setFullname: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
  fullname: string;
  username: string;
  email: string;
  role: string;
  id: number;
  avatar: string;
}

const resetState = (props: PopupProps) => {
  props.setFullname("");
  props.setUsername("");
  props.setEmail("");
  props.setRole("");
  props.setId(0);
};

const Popup = (props: PopupProps) => {
  const addNewUser = () => {
    const newUser: UserInterface = {
      id: props.users.length + 1,
      name: props.fullname,
      username: props.username,
      email: props.email,
      role: props.role,
      checked: false,
    };
    props.setUsers([...props.users, newUser]);
    props.setPopup(false);
    resetState(props);
  };

  const editUser = () => {
    const newUser: UserInterface = {
      id: props.id,
      name: props.fullname,
      username: props.username,
      email: props.email,
      role: props.role,
      checked: false,
    };
    const newUsers = props.users.map((user) =>
      user.id === props.id ? newUser : user
    );
    props.setUsers(newUsers);
    props.setPopup(false);
    resetState(props);
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <div
          className="close-button"
          onClick={() => {
            resetState(props);
            props.setPopup(false);
          }}
        >
          <CloseIcon />
        </div>

        <form onSubmit={props.id !== 0 ? editUser : addNewUser}>
          <Stack spacing={2} sx={{ width: "90%" }} className="mx-auto">
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              value={props.fullname}
              onChange={(e) => props.setFullname(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={props.username}
              onChange={(e) => props.setUsername(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email Adress"
              variant="outlined"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={props.role}
                  onChange={(e) => props.setRole(e.target.value)}
                >
                  <MenuItem value={"Contributor"}>Contributor</MenuItem>
                  <MenuItem value={"Subscriber"}>Subscriber</MenuItem>
                  <MenuItem value={"Author"}>Author</MenuItem>
                  <MenuItem value={"Adminstrator"}>Adminstrator</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>

          <Stack
            direction="column"
            spacing={2}
            sx={{ width: "90%" }}
            className="mx-auto mt-5"
          >
            <h2 className="mt-20">Select Avatar</h2>
            <Stack direction="row" spacing={2}>
              <Avatar
                className={props.avatar === 1 ? "checkedAvatar" : ""}
                variant="square"
                sx={{ height: "50px", width: "50px", borderRadius: "8px" }}
                src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81o9ULZ5d2ZNpSKL-MWEuenP1KSDRpruS8knf4wMLd0ow-uoH4kDIPa4JOUo7BhFhys5YNmpAc0DZ2g55f9g1y3jc8pSbA=w1920-h913"
                onClick={() => props.setAvatar(1)}
              ></Avatar>
              <Avatar
                className={props.avatar === 2 ? "checkedAvatar" : ""}
                variant="square"
                sx={{ height: "50px", width: "50px", borderRadius: "8px" }}
                src="https://lh3.googleusercontent.com/fife/APg5EObkTgulqCsdWnTJLf-K_H5Y-Nbj6bbdtxF-qRPbtiOB7vyjWS2mB4uWM8WzRfBDHGW7bx2_ASrX9e9GFnr4GguqS7if0euUgib6TLL8Ep9B9K9fWpxONhCZA8hajXhkJKuvxkFFAm50TMyVdKz0twTEVoVSc-D0l_z0ner6fAao0Demr-SJo1iI2HC28MBwOE5yZDs_JdQ5BrqT7EGVoqXbcQyYnjC7BlOuuJuSZImhurmkWcPX04PFT3Gy7KbwvqJzkKBjth18T7lSaeTM9PIvKPfTYAi7g2K1f1AeK9LJJMmz8Ir4fwen3Tgftx7a2CD91prjVOdFW9qKtFi2bZZgcZM4CFRhl-ht-Cij8t0dpIqXHy1RrZRAxZHePf1erxIWXkrtwUZDin7cbY2yS_1VswleSlScA9P8IkCz7VAvoefVAGN94BC8wBFT8rHAGURFTJjFJL9zifBxvTMDnZhRs6HA9loUrPaj1j7ImE5FBRzHCI5pmCTjD2nu7yCrryfz2aDWHIO79Dhb1BQEenJzhCPbuY7N47nKxVM9xo0V-xCV0X3YIzy9rvVD_zHljP-7ygZqFcbYVuWX7w0Mil0aG4y7yvgME4HBV7LSwcsXE3j3B3HTPATAACqPKv2F4rVp8-Axm4lNzHjeHihEA7-Vm1mAvKjP8QyXVeznyEfsBdqu3DG6boJeQVD5jknau-wK9JlCKNJM5UM7V3Acyj6ZA-321GIK0NrzQjXodH8DGKN1B_e6k4wUdA4jiaka-Xa3I9qnw6LxxHfknFUnTTqYGBeRJYKaQiRZ_z7rwT2H9FAVPy2PvufTyDwbR5g0Y1aUIjm6NsZaIB-X0K0qlFRZxv7VVZFzrWYba33JkqzrThI2ZplXzV3SI3vSnh-sASX2j7N070ikk8W0lhDFtwN-ePfNcMHCTlyb0u2YIDbM1IwDszmCtqtPeVSzGOEPps53HFqi73eIHDH781qNEQuOu1--0TLqve4YQyM4YuXxseCUvDT6PTpT-3YBKvsxocCL6MYzlnuD5qz-UBLDbyfdAYTKJjAsFUenAJg7yWXb6-Z8p8Bb7kDAPMUElBjU8vTJ90dMtNQ8gRZ8BH1DQxmLxcZL7N7ayJyq-RMOQH2IY-3Mrxb4cFEN104mf06SF-Ss3PgVIIDCgY30yj8EsNpwM1jgs5LjfWLvscKIhcyLQ5GamVkvkN7GYr-RMiM1mmDZ1nP_6NmAUtoyc3q978egIl_ikVOqC6JdDnNjZXJh-cIDJkddRFH3Ax1D4AFcnibPer7yOpC9rU4oNdTQ9RGCOqxEUpJIEK4Tl6xF274qOVgLOrpoDM2OR1pVOl3R3Vsf8tu9ZbIYb_jmu2aj3G6wOnEJ6DrcAu2tQHYEIUdp_Ec2wIE1A2vyBchQrNzDAUCfh46McbkuPgyyhWeINPKBxNuPPJ52OuXPWiHh043ttUep4bC6oBUjgBoQS2ML66T14TNwH18BKoJUKzuH2CnCQe7q=w1920-h601"
                onClick={() => props.setAvatar(2)}
              ></Avatar>
              <Avatar
                className={props.avatar === 3 ? "checkedAvatar" : ""}
                variant="square"
                sx={{ height: "50px", width: "50px", borderRadius: "8px" }}
                src="https://lh3.googleusercontent.com/fife/APg5EOZjjB1akG_DX8GJ3ytfFG8c2Pd5BndCxoC7WQVrJaWRNNM-nxQNxwgVKTVEdaDDwOkekvXuycp6wkhoCiZW1zofEr2oUBWZtlym8FV7_2fIt5y8wMVAybN3b9SoaHs-hcCmiF5bNNxe8Q1_fPMc3PyHmGBXieFr2fYDMxga-Et4dBJ1j1ASCjL5mWV4VU4Ojd03jAMyTvSjOn1RsccPF4rC4_VIla8RvfzZ7_ZEoTmNAdH7ZN7IsD6J-TOmokeRBnAWOoZxZ-EkGkVVUiovPszW80XzJzjTEaqE-3UxhamqxbYI38U8bQUGwcWn7I28eDjo9rQHdbdYQ6QYovsLwWVZ0kojRUarRNQ3caprR4xpXL-OBSFh5rEDA-A2tiblVoFvqwT_PnMTdPzKHmWWWi1MNSXHMDo-avbhcwBE3aQ9mRRClxnLEF2WuiPdARroWlTOzGR1AN7TVQBn_GZdJgV2eQGum0g_tPoMDAqIVA5pvh76HzbA6qLI-VsAXSo7HgPWuYEWDp5v6ahVGTDc012ASBEcknk3u05R7Fpt9JystC6JGgVtsYKzrGfT1EmuviyNljZxZckUEPipOgEUhQDM4DW2fHIU-f2DbddWHGwne3TA5BXyW7qGpUjP9_WnJAdTXENMB1D6BUY6L2K67cYauLdV9FR8yhzTxExHeqzs9MHSmaAyhAJHIo2Ro7ZTgkXTCVxp5IVDM-Kq8lWbPoMgLJ4K00OHPkGpY9jzW48iDn5SGRFwkbGasrzXKPUlK1jVrXxKxrs6aVn82l8cvPmB6i7dU_gk8H9yr2C26ODmstzSHBg0ouEvuJL7zvKWcAcEh6AomBaAV0m-f8qJ8CPS562LEBJ4vIsydEF2Ju-rJgCKjeIJV0EZUVYVCyR1LCPnfaDDyG0oUmVHeuFEBZsctwIhVWrtOVsFZtSua57RaLtf42bzzz51b8sgMvlxz_jXJrhV9pnf3Y17J9iM_jXOhCp675PYNgxm4zUhtEva59wi07kUHpY1hGueqHUt4wi19-zZlXOZ2z4pr-Iy81XMUqPzTejhbH_eKdQ4weMLvyrIa3VQtEUF2fot2w2czrTUp0qoB0p3oP5hxrq8pLZ4i0Xi5Z4fIJsuOKhCICjM5gPlZB7nCAs1-4e3p1MNhnl5OSfRgM1xCm66qcJo504Brt1t8yzgkfxqCfHEotDTouq07Zlv2uBxPDfMj-ATmyc93OpnDNo_MmxgESPzWj_XklJWKImuFldSl6SJbsb4qsslJtvDRFv1vz8xLICF7hkXFIMvB6KtXGwEjkTYN0RwMyglKN7BsRmGpHFKoctmhuRy_8mU5GRyHZSKo2EoS6bj-SY-OYEKU9vw2e4bsX0arjC2QkDFv669KxFwRTAa4jGK2fOefI-W2crXHjm4uFjioRSuoobGeXMm5oFVG6A1Lb5IbPUyCxwUmRidVert8u42pxhMY4CTBOAsjK4AkRTEbkXSAds-w14owbau_46q23Z-=w1920-h913"
                onClick={() => props.setAvatar(3)}
              ></Avatar>
              <Avatar
                className={props.avatar === 4 ? "checkedAvatar" : ""}
                variant="square"
                sx={{ height: "50px", width: "50px", borderRadius: "8px" }}
                src="https://lh3.googleusercontent.com/fife/APg5EOZ8sP93uGMDXQrJ83SnSws5a16_CZ-sXhMdzjL7p_e3L6MoEBJnWWG_ZHoehOnx0RmcwMZWk8RxKxV9rTgZYzi1LliQCGMIAKdg5sX0q9pFcj-dXqHsW4KIeiL8noT0Od4H7wYhobRnfhGv0OX31bcVRC-8XW0bpXSVAZNUVltYKBuX4AZbauqHYyYP139KZuZKwaUJmig_8gNdXCAx_8esplDI9C2QO5gvQRDlTniDKPPR_awvbl9quZgyb2bsAI43FW3mxLxSrTCtcdhNE06v2VZdEl-AEsGCDlQE_6eC1QNj7OM2btSKgpAeZxpz3FUt1-G-M4Uo02okNXFLBhImH62OJUvsM2jwXbivHxKdsTbGEUFiFnJkEA1owY24LWw1SD3j1Q67JXXQfkyZfN2lfMVyjSE3_ORcbzZVLb5mNom1XTZsj8QS89cXza5mh4rLluMun2MsFB3hQjy6cjsivRTQciJ9fSXAnJVc5cB9x6apoFHidahirm41d8Ng9uzi9U16lu2yEfKmL2rBp_ZTQWaJMeWwPMwdUR9TPjc9ocjGywCfUOpifsJRBADm-RCV0B_zVc85JReY1lLZkFOrZGOwNPD_J77Y_QGJu0dyH32nNZEqc6c3zSPegMsWNeg225fzPenHRd7CTWG_jOJCbejX_9uTctxEk1trPIx6Rwk1_UfTuiDhVR3gCrrJmENsJ3vMHLXB2d21S_zdiPG5D7yda_oBWR_mh5f9SEpEaptdxOSVVllbPYsbhQZQKfrVRI_UzzaxqpPY8GKh0hzrVAlLE83cQdVxp76mZZ9qB-hKxzleSO787TICrRv6LrKNo2XUcxWzQJfQRk0fMADRSMq2P88Ix2uZkvUQjAIvmdtII_RzgZF7gElEvckRMFy0CQ4c55_bKhbDHXUl9VShVjeI-n329ARfp8qo9UsDXmTY_TUj4rGZ9PlEyL94PZwtov3byV3IH6-Z_SYTK-khgnMwvesOPulqPWRbBkHpjz7UoytEA3pszDh55DA5S-xti35WIuMcMBFDIyV59Hydtkgf3XDp6oQU8aGe5wUbioLqNMf0Hdw-l2NM_gpZvojcpftzZSuRl4a6MPSL6j6pF5OBtFP2WBtgNr2q2wo55vLfL0jHciMaEmXZEMprghndSZ59LFFBK58vj11R1o4YtltQn5h93MXJfrYvFduOpHpdUlmUNQxANtd4RlbUy35A4DTU0JLmeL4kyNd_BufyyV5xPQgOFN6bnijb2pUEOA_C3fh35BvS2CZH4RBTXmIm-FkmHOzCtVExVrVh3ACSato50Rsuh-tZMOguXK4ooZZ7KSvmKpJNxVnQUFvNm3ypMr_2TK_85IubRdc-lo0_qeYYsH3SwZNA2KUnxU-QQEsSImjUHz-ED7llCF5c7lmNrfiuqFoSyfmoltQjqK2QFUbGkRMfRcS9PkAVxkDKWq3U8cXpa8oCS2JBCn3CgYYntm7eW5f0m2fllBI02Ew9xwXg=w1920-h601"
                onClick={() => props.setAvatar(4)}
              ></Avatar>
              <Avatar
                className={props.avatar === 5 ? "checkedAvatar" : ""}
                variant="square"
                sx={{ height: "50px", width: "50px", borderRadius: "8px" }}
                src="https://lh3.googleusercontent.com/fife/APg5EOZJ6wNJ-QTSdjQY9YcwG-AH2qrlnFIjX4e63zpk9IzIfzCjP19SNzYAOKWccf7tkudi66VZ-9xuuu8Eis2P7-tz677sNkNIMlGqaNegpve17KzLHhSV9q6CmEDZd2zw8hFv28GatDJ1nyGcJ1oWR1CSboLD1rUqTi2h3bdIWbLYZpjPToGGx89irIPAr0Dmt8aLA5ERDqohsjaoLNO0YVV4UxHIZ8dIBGMikpV9U7VFV3exH7rCdNtrXUDNVT1EE1LyfFkXj4G5KvVJ5Uidd7dlyivGLRhFI_wj08k-bEJtycpYJWgPozzXMRPMbgiWGB8jstH3Q0Lk1-DrBACucSez0lRHtSJAwFmsuZJBTssjOELTEVCjvCeq3OSzdXWrdHPuK2JagOkhtNnLtL6tS3P4gACPOf2YFRPO_AuZNM2F7ciDtE8g42U28r5vkUdRMONu6eAdmNKO2Lg3CiMTM-18uKIb_8eO0q9E3zYc3GbvdhoRXAwtE7uCCialISz8QPBODNncJbiSrgUNEreLVwAmH6oj0oTcbeLe0ku0uCe5HIsXAButvcooqny5tOi2tybhFjZtGmvHsMZ6w84mktnWdrA-47F0fte6YVHuA_tPztCnfFGDP4vTBwwHreLoG_tmrVWIo0nzEF49tLJX9o3fc2SYVEtsnaRzRgTBWvnsbUmm8AUXX85pb5wYB_yWLfGDljr63_m9Xss8JI-lE_mva3_hG2UHbzT_7ZgHP-pp60y968Z4Q0bl2eLYmyeSnzPFgZKqnwjDCV6cC8dV-d_zqo2zpTPeCO-oGais0OjyXEjHD1REl4zv7NKTsYZq3TAdo94brGNFAj45GnASk_lHsmOtmuVUudHsCWmHhiHvABpmWcmmWNxdkXF8Lv5iau-PSBF5y4_NNNTPuDT6b9QEw3Pw8SLrpF6ObfejLqDvDJUIkrWEdWxg2j0oeqVbeDYGMZvQ-XUhwkDVAJK0NpjjdUuZxb84aa0tHqKRns6MJ11MHP9G3rd4ugCp-YxrXcKWG9mrSX-TSbsfDg7wrBzPlO78UvKWig5XL4kzvR3Zc0QdS6V0jnrylP6nxhe2RcwtJQeXyFToPXGRKdnxJ6cA6LAuH9f2ftvecEzp634_nKPqkg4V8EUHtfkisRluxcOprSk-ILKqzWwRTsW5y9YZXzpHJViGUYlYkEam-DX9aqpHHvALQFDyKkAzKxfFBaY0CSZidJhygmfP7uR0c9cn1v71-aalgOnIxL-Jd7EP_RvPbx1p4CeKw6Z0B5MESkjUlQBH3Xr4AFgPXUjYMIbvwyeM7sjY61qh4mBQtuHuFBHQCFsfnoIn9E1uEwYfYgD-OQz9Ef_Ots14Z8fmO2eK_Lm8oxG8HPY0CTkqNWvHeRNcUVqpYt5ozk2lEDnbzoRPMHngKpB2zVJCg3ndFLeHJc71-r2hMtDOZO_VAgU81OWcw8mfKm4K6EtIa_gnraTfzbpPkkD9Jz3B6bdE-TBd-lel=w1920-h601"
                onClick={() => props.setAvatar(5)}
              ></Avatar>
              <Avatar
                className={props.avatar === 6 ? "checkedAvatar" : ""}
                variant="square"
                sx={{ height: "50px", width: "50px", borderRadius: "8px" }}
                src="https://lh3.googleusercontent.com/fife/APg5EOaLxhzbgyP6-DdGchbrJRrw7aHg3tKAeWuSaHYFI1Ev_2H1ngwQQxBrW2_OOGp2k0-KlZopNB0ekeKU16HtKXBGSl6LYHGjv8kE4__6rxFV0zgwXwGl4otswcV_my0mcM4dRUBw7ruwETFrL0l-PHeayOzn_q5Pw1BDWWZys6ysW2ZAtb4YgXRuk8-szXJCckXwpCLhpOXB-AKUK0hwkqxlIWki8glqtNfqhfdDGJWgfGVapTBuGrzNTum3TsIjc2EwAyQb7hvln6Dbpmka8AcBwZI6bG72TOV2vRigDPBQQbjp2BBiKcddpdHEQ_qUUEoqwMJ8lIxgJ4SrujhcEYWgwd1BuXmplTm_bbmyHr_DdmtlULEZsVfF7iEEGGPtJb03pV46fENnl1eGPEsqP2b5rCheuIb4pa4X9Fkq2WJpCSFOqewYqT09eMHO6UeFnOavEMQkJP4TL-b-86vXkIY-iKjSESRjsmQhiiLmOs9PMFvYG6iwcl0JGGFlYyy1ArKsBa0UY-wkMi-_J9hPJ7kIR7wJ24chlgQNbqNysutx2QqZiEXKCI2WOKdL7geOvaaE-SGIFABgf7zNoCRDmXStN3DkTh9sq562sevjc5M93Yd7DPAr4fE_EHUmbvkbH2ClIkuB-p6mmeX3vs6r8-WnOri1SSTGjjdi6K2CAVX9Kox6Ya5_g26M3IIDy2fHzuh5hpsncQAMEvKO9MZspiZzFSC58EVFSPZbxeodIYlDQEb9L0lHmr1Qf_vHOEM9iqvydcVfdEX3dJXL5S8rgueF860OFK7MWp79BstjpjGJle3qkrd4YgYMPqUtAteVGWXKiwfOeD-QMbXFwReD7Q4Xq4tKeK_4-pLY79d4GmtcW2Q2LV-_uhitcxBp_PkvuihlQ-BiCrYMWZabsWAKETITm1QGTbVUKKXZcCSMAA7C0zLMLIj1TlO0pR-fsHrvBujf9MfXJkVIJB0im8ZB-1k7FPyVGPEp7xk8HuO-G6NPVcHGOcKRJsjWqojHwDFV8Dt_nwryYmPcJHOtK2aKMPlWA1NZU4wiD2_KtHzHJwvSD9U-psmA5Y5E7Uyq66gan6SEIUUWfdp9XUxjC6ykWB-Kcnq7sD7UCvN8P03g1-99S6wrkaK7j4rj1kH9chegfAHifINGnB_r4b1jmvq-aErp8IqL8bXv1sTIr6vlluEZptzTVVZON3R6bzvRcvWAVjjEYpROTGelmHrPHfLVQCn6YgE6oiy4bOGrDHOlsRB7eHLB3FzpJdL8vRmdc3blwBMr07JPSubT8CvSEiD_etUbFsPjC_gNtn0gU-Z0aO4eR91J6Y7xnAkBFurwX0UYTRut6C1O3irFsGNzbp6L2a6lOyzcfWIE8D21XSo1QFVrMUypC_11MrN29TIiq79iDwdfzE2Cyngugff8HR5qh2JvfePGyHREhEo8_C7YZxB9q1YA3c8SiUJRdfS9O2klmtwZzF2httibI_mKYAEpT0WpWxV4=w1920-h601"
                onClick={() => props.setAvatar(6)}
              ></Avatar>
            </Stack>
          </Stack>
          <div className="mt-5 mx-auto w-32 h-9">
            <Button
              variant="contained"
              className="text-sm w-full h-full"
              type="submit"
            >
              {props.id !== 0 ? "Edit User" : "Add User"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
