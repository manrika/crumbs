import BreadCrumbs from "@/app/components/BreadCrumbs";
import CrumbsLogo from "@/app/components/CrumbsLogo";
import NavBar from "@/app/components/NavBar";
import { Box } from "@mui/material";

export const PAGE_MARGIN = "18px";

type Props = {
  showNavBar?: boolean;
  showBreadCrumbs?: boolean;
  children: React.ReactNode;
};

const PageContainer: React.FC<Props> = ({
  showNavBar,
  showBreadCrumbs,
  children,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F1E6D8",
        px: PAGE_MARGIN,
        mb: "24px",
        width: "100%",
        overflowX: "clip",
        overscrollBehaviorX: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          py: "24px",
          alignItems: "center",
        }}
      >
        <CrumbsLogo />
        {showNavBar && <NavBar />}
        <Box sx={{ width: "100%" }}>{showBreadCrumbs && <BreadCrumbs />}</Box>
      </Box>
      {children}
    </Box>
  );
};

export default PageContainer;
