import BreadCrumbs from "@/app/components/BreadCrumbs";
import CrumbsLogo from "@/app/components/CrumbsLogo";
import NavBar from "@/app/components/NavBar";
import { Box } from "@mui/material";

export const PAGE_RESPONSIVE_MARGIN = {
  xs: "18px",
  sm: "24px",
  md: "48px",
  lg: "80px",
  xl: "120px",
};

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
        px: PAGE_RESPONSIVE_MARGIN,
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
