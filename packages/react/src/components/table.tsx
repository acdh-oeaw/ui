"use client";

import { ArrowUpIcon, GripVerticalIcon } from "lucide-react";
import type { ElementRef } from "react";
import {
	Button as AriaButton,
	Cell as AriaTableCell,
	type CellProps as AriaTableCellProps,
	Collection as AriaCollection,
	Column as AriaTableColumn,
	type ColumnProps as AriaTableColumnProps,
	ColumnResizer as AriaColumnResizer,
	composeRenderProps,
	Group as AriaGroup,
	ResizableTableContainer as AriaResizableTableContainer,
	Row as AriaTableRow,
	type RowProps as AriaTableRowProps,
	Table as AriaTable,
	TableBody as AriaTableBody,
	TableHeader as AriaTableHeader,
	type TableHeaderProps as AriaTableHeaderProps,
	type TableProps as AriaTableProps,
	useTableOptions,
} from "react-aria-components";

import { Checkbox } from "@/components/checkbox";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const tableStyles = variants({
	base: "border-separate border-spacing-0",
});

export type TableStyles = VariantProps<typeof tableStyles>;

export interface TableProps extends AriaTableProps, TableStyles {}

export const Table = forwardRef(function Table(
	props: TableProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTable>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaResizableTableContainer className="relative max-h-[280px] w-[550px] scroll-pt-[2.281rem] overflow-auto rounded-lg border">
			<AriaTable ref={forwardedRef} {...rest} className={tableStyles({ className })}>
				{children}
			</AriaTable>
		</AriaResizableTableContainer>
	);
});

const _tableColumnStyles = compose(
	focusRing,
	variants({
		base: "flex h-5 flex-1 items-center gap-1 overflow-hidden px-2",
	}),
);

const _tableResizerStyles = compose(
	focusRing,
	variants({
		base: "box-content h-5 w-px translate-x-[8px] cursor-col-resize rounded bg-neutral-400 bg-clip-content px-[8px] py-1 -outline-offset-2 resizing:w-[2px] resizing:bg-blue-600 resizing:pl-[7px] forced-colors:bg-[ButtonBorder] forced-colors:resizing:bg-[Highlight]",
	}),
);

export const tableColumnStyles = variants({
	base: "cursor-default text-start text-sm font-semibold text-neutral-700 [&:focus-within]:z-20 [&:hover]:z-20",
});

export type TableColumnStyles = VariantProps<typeof tableColumnStyles>;

export interface TableColumnProps extends AriaTableColumnProps, TableColumnStyles {}

export const TableColumn = forwardRef(function TableColumn(
	props: TableColumnProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTableColumn>>,
) {
	const { children, className, width, ...rest } = props;

	return (
		<AriaTableColumn
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return tableColumnStyles({ ...renderProps, className });
			})}
		>
			{composeRenderProps(children, (children, { allowsSorting, sortDirection }) => {
				return (
					<div className="flex items-center">
						<AriaGroup role="presentation" tabIndex={-1} className={_tableColumnStyles}>
							<span className="truncate">{children}</span>
							{allowsSorting ? (
								<span
									className={`flex size-4 items-center justify-center transition${
										sortDirection === "descending" ? "rotate-180" : ""
									}`}
								>
									{sortDirection ? (
										<ArrowUpIcon
											aria-hidden={true}
											className="size-4 shrink-0 text-neutral-500 forced-colors:text-[ButtonText]"
										/>
									) : null}
								</span>
							) : null}
						</AriaGroup>
						{width == null ? <AriaColumnResizer className={_tableResizerStyles} /> : null}
					</div>
				);
			})}
		</AriaTableColumn>
	);
});

export const tableHeaderStyles = variants({
	base: "sticky top-0 z-10 rounded-t-lg border-b bg-neutral-100/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 forced-colors:bg-[Canvas]",
});

export type TableHeaderStyles = VariantProps<typeof tableHeaderStyles>;

export interface TableHeaderProps<T extends object>
	extends AriaTableHeaderProps<T>,
		TableHeaderStyles {}

export const TableHeader = forwardRef(function TableHeader<T extends object>(
	props: TableHeaderProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTableHeader>>,
) {
	const { children, className, ...rest } = props;

	const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

	return (
		<AriaTableHeader<T> ref={forwardedRef} {...rest} className={tableHeaderStyles({ className })}>
			{allowsDragging ? <TableColumn /> : null}
			{selectionBehavior === "toggle" && (
				<AriaTableColumn
					width={36}
					minWidth={36}
					className="cursor-default p-2 text-start text-sm font-semibold"
				>
					{selectionMode === "multiple" && <Checkbox slot="selection" />}
				</AriaTableColumn>
			)}
			<AriaCollection items={props.columns}>{props.children}</AriaCollection>
		</AriaTableHeader>
	);
});

export const tableRowStyles = compose(
	focusRing,
	variants({
		base: "group/row relative cursor-default select-none text-sm text-neutral-900 -outline-offset-2 hover:bg-neutral-100 selected:bg-blue-100 selected:hover:bg-blue-200 disabled:text-neutral-300",
	}),
);

export type TableRowStyles = VariantProps<typeof tableRowStyles>;

export interface TableRowProps<T extends object> extends AriaTableRowProps<T>, TableRowStyles {}

export const TableRow = forwardRef(function TableRow<T extends object>(
	props: TableRowProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTableRow>>,
) {
	const { children, className, columns, id, ...rest } = props;

	const { selectionBehavior, allowsDragging } = useTableOptions();

	return (
		<AriaTableRow<T> ref={forwardedRef} {...rest} className={tableRowStyles({ className })} id={id}>
			{allowsDragging ? (
				<TableCell>
					<AriaButton slot="drag">
						<GripVerticalIcon aria-hidden={true} className="size-4 shrink-0" />
					</AriaButton>
				</TableCell>
			) : null}
			{selectionBehavior === "toggle" && (
				<TableCell>
					<Checkbox slot="selection" />
				</TableCell>
			)}
			<AriaCollection items={columns}>{children}</AriaCollection>
		</AriaTableRow>
	);
});

export const tableCellStyles = compose(
	focusRing,
	variants({
		base: "truncate border-b p-2 -outline-offset-2 [--selected-border:theme(colors.blue.200)] group-last/row:border-b-0 group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border]",
	}),
);

export type TableCellStyles = VariantProps<typeof tableCellStyles>;

export interface TableCellProps extends AriaTableCellProps, TableCellStyles {}

export const TableCell = forwardRef(function TableCell(
	props: TableCellProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTableCell>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaTableCell ref={forwardedRef} {...rest} className={tableCellStyles({ className })}>
			{children}
		</AriaTableCell>
	);
});

export { AriaTableBody as TableBody };
