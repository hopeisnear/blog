import { stub } from 'sinon';
import { createStoreMock } from 'utils/mockStoreCreator';
import * as commentsService from 'services/comments-service';
import { ADD_COMMENT_RESPONDED } from 'events/comment-events';
import * as articleSelector from 'common/article-selector';
import { addCommentAction } from '../add-comment-actions';

jest.mock('moment', () => ({ utc: () => ({ format: () => '2018–01–30T12:34:56+00:00' }) }));

describe('add-comment-actions', () => {
  test('should add new comment', () => {
    stub(articleSelector, 'selectArticle').returns(() => ({ _id: '1' }));
    stub(commentsService, 'addNewComment')
      .withArgs('1', { content: 'Test comment', createdAt: '2018–01–30T12:34:56+00:00' })
      .returns(Promise.resolve('added comment response'));
    const store = createStoreMock();

    return store.dispatch(addCommentAction(undefined, { content: 'Test comment' })).then(() => {
      const [addCommentResponded] = store.getActions();

      expect(addCommentResponded.type).toBe(ADD_COMMENT_RESPONDED);
      expect(addCommentResponded.updatedArticle).toBe('added comment response');
    });
  });

  test('should append new comment', () => {
    stub(articleSelector, 'selectArticle').returns(() => ({ _id: '1', comments: [] }));
    stub(commentsService, 'appendComment')
      .withArgs('1', { content: 'Test comment', createdAt: '2018–01–30T12:34:56+00:00' })
      .returns(Promise.resolve('appended comment response'));
    const store = createStoreMock();

    return store.dispatch(addCommentAction(undefined, { content: 'Test comment' })).then(() => {
      const [addCommentResponded] = store.getActions();

      expect(addCommentResponded.type).toBe(ADD_COMMENT_RESPONDED);
      expect(addCommentResponded.updatedArticle).toBe('appended comment response');
    });
  });

  test('should add new reply', () => {
    stub(articleSelector, 'selectArticle').returns(() => ({ _id: '1', comments: [{ _key: '1', replies: [{ _key: '2' }] }, { _key: '3' }] }));
    stub(commentsService, 'addNewReply')
      .withArgs('1', '3', { content: 'Test comment', createdAt: '2018–01–30T12:34:56+00:00' })
      .returns(Promise.resolve('appended comment response'));
    const store = createStoreMock();

    return store.dispatch(addCommentAction({ _key: '3' }, { content: 'Test comment' })).then(() => {
      const [addCommentResponded] = store.getActions();

      expect(addCommentResponded.type).toBe(ADD_COMMENT_RESPONDED);
      expect(addCommentResponded.updatedArticle).toBe('appended comment response');
    });
  });

  test('should append new reply', () => {
    stub(articleSelector, 'selectArticle').returns(() => ({ _id: '1', comments: [{ _key: '1', replies: [{ _key: '2', replies: [{ _key: '4' }] }] }, { _key: '3' }] }));
    stub(commentsService, 'appendReply')
      .withArgs('1', '2', { content: 'Test comment', createdAt: '2018–01–30T12:34:56+00:00' })
      .returns(Promise.resolve('appended comment response'));
    const store = createStoreMock();

    return store.dispatch(addCommentAction({ _key: '2' }, { content: 'Test comment' })).then(() => {
      const [addCommentResponded] = store.getActions();

      expect(addCommentResponded.type).toBe(ADD_COMMENT_RESPONDED);
      expect(addCommentResponded.updatedArticle).toBe('appended comment response');
    });
  });

  afterEach(() => {
    articleSelector.selectArticle.restore();
    commentsService.addNewComment.restore && commentsService.addNewComment.restore();
    commentsService.appendComment.restore && commentsService.appendComment.restore();
    commentsService.addNewReply.restore && commentsService.addNewReply.restore();
    commentsService.appendReply.restore && commentsService.appendReply.restore();
  });
});
