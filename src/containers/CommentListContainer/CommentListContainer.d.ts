import DefaultMobile from './CommentListContainer.mobile';
import * as mobile from './CommentListContainer.mobile';
// import DefaultWeb from './routes.web';
// import * as web from './routes.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './CommentListContainer.mobile';
export default DefaultMobile;