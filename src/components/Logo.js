import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
{/* <svg
  width="100"
  height={73}
  viewBox="0 0 792.969 73"
  xmlns="http://www.w3.org/2000/svg"
>
  <g
    id="svgGroup"
    strokeLinecap="round"
    fillRule="evenodd"
    fontSize="9pt"
    stroke="#000"
    strokeWidth="0.25mm"
    fill="#000"
    style={{ stroke: "#000", strokeWidth: "0.25mm", fill: "#000" }}
  >
    <path
      d="M 155.566 22.559 L 155.566 71.681 L 142.969 71.681 L 142.969 1.368 L 158.984 1.368 L 181.885 50.001 L 204.98 1.368 L 220.361 1.368 L 220.361 71.681 L 207.666 71.681 L 207.666 23.097 L 184.277 71.778 L 179.053 71.778 L 155.566 22.559 Z M 318.652 23.585 L 318.652 71.681 L 306.348 71.681 L 306.348 1.368 L 318.75 1.368 L 348.975 49.659 L 348.975 1.368 L 361.328 1.368 L 361.328 71.681 L 348.73 71.681 L 318.652 23.585 Z M 502.686 23.585 L 502.686 71.681 L 490.381 71.681 L 490.381 1.368 L 502.783 1.368 L 533.008 49.659 L 533.008 1.368 L 545.361 1.368 L 545.361 71.681 L 532.764 71.681 L 502.686 23.585 Z M 709.131 0.099 L 708.936 0.001 A 35.749 35.749 0 0 1 716.412 0.737 Q 721.224 1.766 724.881 4.234 A 20.979 20.979 0 0 1 727.1 5.958 Q 733.936 12.061 734.521 22.804 L 720.996 22.804 Q 720.79 18.813 719.202 16.252 A 8.782 8.782 0 0 0 717.627 14.356 A 10.477 10.477 0 0 0 713.411 12.067 Q 711.805 11.605 709.887 11.504 A 20.87 20.87 0 0 0 708.789 11.476 A 18.725 18.725 0 0 0 705.5 11.747 Q 703.66 12.076 702.181 12.802 A 9.884 9.884 0 0 0 700.732 13.673 A 7.76 7.76 0 0 0 698.68 15.792 Q 697.649 17.41 697.609 19.507 A 8.923 8.923 0 0 0 697.607 19.679 A 9.329 9.329 0 0 0 697.848 21.86 A 6.28 6.28 0 0 0 699.512 24.903 Q 701.367 26.759 706.689 28.468 L 717.627 31.69 Q 727.441 34.571 731.592 39.161 A 16.052 16.052 0 0 1 735.583 47.907 A 21.922 21.922 0 0 1 735.791 50.977 A 25.005 25.005 0 0 1 734.863 57.974 A 18.697 18.697 0 0 1 728.906 67.188 Q 723.128 72.207 713.379 72.891 A 45.382 45.382 0 0 1 710.205 72.999 Q 700.205 72.999 693.542 69.121 A 22.799 22.799 0 0 1 690.137 66.7 A 21.207 21.207 0 0 1 683.249 54.936 A 31.529 31.529 0 0 1 682.52 48.78 L 695.801 48.78 Q 695.947 54.884 699.707 58.204 A 12.408 12.408 0 0 0 704.68 60.827 Q 706.563 61.349 708.804 61.451 A 24.387 24.387 0 0 0 709.912 61.476 A 25.386 25.386 0 0 0 713.455 61.245 Q 717.08 60.733 719.336 59.083 A 7.77 7.77 0 0 0 722.49 53.697 A 11.743 11.743 0 0 0 722.607 52.003 A 8.103 8.103 0 0 0 722.191 49.355 A 6.925 6.925 0 0 0 720.508 46.681 A 8.072 8.072 0 0 0 719.072 45.574 Q 717.511 44.599 714.948 43.67 A 49.047 49.047 0 0 0 712.207 42.774 L 702.1 39.796 Q 692.725 36.964 688.623 32.276 Q 684.619 27.686 684.619 20.265 A 19.194 19.194 0 0 1 686.033 12.79 A 18.091 18.091 0 0 1 691.504 5.665 A 25.374 25.374 0 0 1 703.005 0.615 A 34.866 34.866 0 0 1 709.131 0.099 Z M 423.047 59.669 L 423.047 71.681 L 378.32 71.681 L 378.32 1.368 L 422.51 1.368 L 422.51 13.38 L 391.406 13.38 L 391.406 30.274 L 420.117 30.274 L 420.117 41.7 L 391.406 41.7 L 391.406 59.669 L 423.047 59.669 Z M 673.34 59.669 L 673.34 71.681 L 628.613 71.681 L 628.613 1.368 L 672.803 1.368 L 672.803 13.38 L 641.699 13.38 L 641.699 30.274 L 670.41 30.274 L 670.41 41.7 L 641.699 41.7 L 641.699 59.669 L 673.34 59.669 Z M 618.066 1.368 L 593.945 71.681 L 579.98 71.681 L 555.957 1.368 L 570.459 1.368 L 587.256 53.565 L 604.248 1.368 L 618.066 1.368 Z M 66.895 71.681 L 92.969 1.368 L 106.982 1.368 L 132.861 71.681 L 118.799 71.681 L 113.672 56.983 L 85.4 56.983 L 80.273 71.681 L 66.895 71.681 Z M 230.273 71.681 L 256.348 1.368 L 270.361 1.368 L 296.24 71.681 L 282.178 71.681 L 277.051 56.983 L 248.779 56.983 L 243.652 71.681 L 230.273 71.681 Z M 773.242 13.38 L 773.242 71.681 L 760.254 71.681 L 760.254 13.38 L 740.576 13.38 L 740.576 1.368 L 792.969 1.368 L 792.969 13.38 L 773.242 13.38 Z M 25.879 71.681 L 0 71.778 L 0 1.466 L 25.781 1.466 A 46.907 46.907 0 0 1 38.452 3.098 A 36.198 36.198 0 0 1 52.979 10.987 A 31.467 31.467 0 0 1 63.305 31.923 A 43.913 43.913 0 0 1 63.525 36.378 Q 63.525 52.393 52.979 62.061 Q 42.48 71.681 25.879 71.681 Z M 473.486 1.368 L 473.486 71.681 L 460.4 71.681 L 460.4 1.368 L 473.486 1.368 Z M 25.391 13.868 L 13.086 13.868 L 13.086 59.376 L 25.391 59.376 A 31.407 31.407 0 0 0 33.266 58.439 A 22.816 22.816 0 0 0 43.115 53.175 A 20.299 20.299 0 0 0 49.269 41.568 A 29.418 29.418 0 0 0 49.707 36.378 A 26.979 26.979 0 0 0 48.856 29.413 A 19.367 19.367 0 0 0 43.115 19.874 A 22.248 22.248 0 0 0 33.102 14.713 Q 29.565 13.868 25.391 13.868 Z M 89.258 45.997 L 109.766 45.997 L 99.561 16.602 L 89.258 45.997 Z M 252.637 45.997 L 273.145 45.997 L 262.939 16.602 L 252.637 45.997 Z"
      vectorEffect="non-scaling-stroke"
    />
  </g>
</svg> */}
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}