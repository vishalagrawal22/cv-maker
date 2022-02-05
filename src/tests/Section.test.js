import { Section, InputSection, InputListSection } from '../components/Section';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Section component tests', () => {
  test('adds header with appropiate text to display', () => {
    render(<Section header="Test Header" />);
    expect(screen.getByText(/test header/i)).toBeInTheDocument();
  });

  test('adds children to display', () => {
    render(
      <Section header="Test Header">
        <li>child list item 1</li>
        <li>child list item 2</li>
      </Section>
    );
    expect(screen.getByText(/test header/i)).toBeInTheDocument();
    expect(screen.getByText(/child list item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child list item 2/i)).toBeInTheDocument();
  });
});

describe('InputSection component tests', () => {
  let header;
  let editDisplay;
  let viewDisplay;
  beforeAll(() => {
    header = 'Test Header';
    editDisplay = <div>Edit Mode</div>;
    viewDisplay = <div>View Mode</div>;
  });

  test('submit button works', () => {
    let rerender;
    const onStartEditMode = null;
    const onSubmit = jest.fn(() => {
      rerender(
        <InputSection
          header={header}
          editMode={false}
          onStartEditMode={onStartEditMode}
          onSubmit={onSubmit}
          editDisplay={editDisplay}
          viewDisplay={viewDisplay}
        />
      );
    });

    ({ rerender } = render(
      <InputSection
        header={header}
        editMode={true}
        onStartEditMode={onStartEditMode}
        onSubmit={onSubmit}
        editDisplay={editDisplay}
        viewDisplay={viewDisplay}
      />
    ));

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Edit Mode')).toBeInTheDocument();
    expect(screen.queryByText('View Mode')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('submit'));
    expect(onSubmit.mock.calls.length).toBe(1);

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.queryByText('Edit Mode')).not.toBeInTheDocument();
    expect(screen.getByText('View Mode')).toBeInTheDocument();
  });

  test('edit button works', () => {
    let rerender;
    const onStartEditMode = jest.fn(() => {
      rerender(
        <InputSection
          header={header}
          editMode={true}
          onStartEditMode={onStartEditMode}
          onSubmit={onSubmit}
          editDisplay={editDisplay}
          viewDisplay={viewDisplay}
        />
      );
    });

    const onSubmit = null;

    ({ rerender } = render(
      <InputSection
        header={header}
        editMode={false}
        onStartEditMode={onStartEditMode}
        onSubmit={onSubmit}
        editDisplay={editDisplay}
        viewDisplay={viewDisplay}
      />
    ));

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.queryByText('Edit Mode')).not.toBeInTheDocument();
    expect(screen.getByText('View Mode')).toBeInTheDocument();

    userEvent.click(screen.getByText('edit'));
    expect(onStartEditMode.mock.calls.length).toBe(1);

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Edit Mode')).toBeInTheDocument();
    expect(screen.queryByText('View Mode')).not.toBeInTheDocument();
  });
});

describe('InputListSection component tests', () => {
  let header;
  let editDisplay;
  let viewDisplay;
  beforeAll(() => {
    header = 'Test Header';
    editDisplay = <div>Edit Mode</div>;
    viewDisplay = <div>View Mode</div>;
  });

  test('submit button works', () => {
    let rerender;
    const onAddItem = null;
    const onStartEditMode = null;
    const onSubmit = jest.fn(() => {
      rerender(
        <InputListSection
          header={header}
          editMode={false}
          onStartEditMode={onStartEditMode}
          onSubmit={onSubmit}
          editDisplay={editDisplay}
          viewDisplay={viewDisplay}
          onAddItem={onAddItem}
        />
      );
    });

    ({ rerender } = render(
      <InputListSection
        header={header}
        editMode={true}
        onStartEditMode={onStartEditMode}
        onSubmit={onSubmit}
        editDisplay={editDisplay}
        viewDisplay={viewDisplay}
        onAddItem={onAddItem}
      />
    ));

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Edit Mode')).toBeInTheDocument();
    expect(screen.queryByText('View Mode')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('submit'));
    expect(onSubmit.mock.calls.length).toBe(1);

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.queryByText('Edit Mode')).not.toBeInTheDocument();
    expect(screen.getByText('View Mode')).toBeInTheDocument();
  });

  test('edit button works', () => {
    let rerender;
    const onAddItem = null;
    const onStartEditMode = jest.fn(() => {
      rerender(
        <InputListSection
          header={header}
          editMode={true}
          onStartEditMode={onStartEditMode}
          onSubmit={onSubmit}
          editDisplay={editDisplay}
          viewDisplay={viewDisplay}
          onAddItem={onAddItem}
        />
      );
    });

    const onSubmit = null;

    ({ rerender } = render(
      <InputListSection
        header={header}
        editMode={false}
        onStartEditMode={onStartEditMode}
        onSubmit={onSubmit}
        editDisplay={editDisplay}
        viewDisplay={viewDisplay}
        onAddItem={onAddItem}
      />
    ));

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.queryByText('Edit Mode')).not.toBeInTheDocument();
    expect(screen.getByText('View Mode')).toBeInTheDocument();

    userEvent.click(screen.getByText('edit'));
    expect(onStartEditMode.mock.calls.length).toBe(1);

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Edit Mode')).toBeInTheDocument();
    expect(screen.queryByText('View Mode')).not.toBeInTheDocument();
  });

  test('add button works', () => {
    const onAdd = jest.fn();
    const onStartEditMode = null;
    const onSubmit = null;

    render(
      <InputListSection
        header={header}
        editMode={true}
        onStartEditMode={onStartEditMode}
        onSubmit={onSubmit}
        editDisplay={editDisplay}
        viewDisplay={viewDisplay}
        onAdd={onAdd}
      />
    );
    userEvent.click(screen.getByText('add'));
    expect(onAdd.mock.calls.length).toBe(1);
  });
});
