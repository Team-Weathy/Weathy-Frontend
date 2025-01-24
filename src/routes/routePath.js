// import { bookmarkCustomFrame } from "@/api";
// import FrameBackgroundCreateTestPage from "@/test/FrameBackgroundCreateTestPage";
// import MyBookmarkCustomFrameTestPage from "@/test/MyBookmarkCustomFrameTestPage";
// import MyCustomFramesPageTest from "@/test/MyCustomFramesPageTest";

const RoutePath = {
  /* 로그인 페이지 */
  Login: "/login",
  Signup: "/signup",

  /* 메인 페이지 */
  Main: "/",
  HotFramePage: "/hotframe",
  SaveHotFrame: "/savehotframe",

  /* 프레임 선택 페이지 */
  SelectFrame: "/selectframe",
  MakeBG: "/selectframe/makebg",
  MakeSticker: "/selectframe/makebg/makesticker",
  SaveFrame: "/selectframe/makebg/makesticker/saveframe",

  /* 보관함 페이지 */
  Storage: "/storages",
  MyFrame: "/storages/my-frames",
  SavedFrame: "/storages/saved-frames",
  Gallery: "/storages/galleries",

  /* 테스트 페이지 */
  Test: "/test",
  UsersTest: "/test/users-test",
  StickerTest: "/test/stickers-test",
  FrameBackgroundCreateTest: "/test/frame-background-create-test",
  FrameCreateTest: "/test/frame-create-test",
  FrameViewTest: "/test/frame-view-test",
  PhotoCreateTest: "/test/photo-create-test",
  PhotoListTest: "/test/photo-list-test",
  CustomFrameCreateTest: "/test/custom-frame-create-test",
  CustomFrameReadTest: "/test/custom-frame-read-test",
  CustomFrameListTest: "/test/custom-frame-list-test",
  MyCustomFramesPageTest: "/test/my-custom-frame-test",
  BookmarkCustomFrameTest: "/test/custom-frame-bookmark-test",
  MyBookmarkCustomFrameTest: "/test/my-bookmark-custom-frame-test",
};

export default RoutePath;
