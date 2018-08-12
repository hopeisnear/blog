import sanity from 'utils/sanityProvider';
import uuidv4 from 'uuid/v4';

export function appendComment(documentId, {
  name, content, email, website, createdAt
}) {
  return sanity
    .patch(documentId) // Document ID to patch
    .insert('after', 'comments[-1]', [{
      name,
      content,
      email,
      website,
      createdAt,
      _type: 'comment',
      _key: uuidv4()
    }])
    .commit();
}

export function addNewComment(documentId, {
  name, content, email, website, createdAt
}) {
  return sanity
    .patch(documentId) // Document ID to patch
    .set({
      comments: [{
        name,
        content,
        email,
        website,
        createdAt,
        _type: 'comment',
        _key: uuidv4()
      }]
    })
    .commit();
}


export function addNewReply(documentId, key, {
  name, content, email, website, createdAt
}) {
  return sanity
    .patch(documentId) // Document ID to patch
    .set({
      [`comments..[_key=="${key}"].replies`]: [{
        name,
        content,
        email,
        website,
        createdAt,
        _type: 'comment',
        _key: uuidv4()
      }]
    })
    .commit();
}

export function appendReply(documentId, key, {
  name, content, email, website, createdAt
}) {
  return sanity
    .patch(documentId) // Document ID to patch
    .insert('after', `comments..[_key=="${key}"].replies[-1]`, [{
      name,
      content,
      email,
      website,
      createdAt,
      _type: 'comment',
      _key: uuidv4()
    }])
    .commit();
}
